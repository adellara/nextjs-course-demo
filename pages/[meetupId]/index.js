import { Fragment } from "react";
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient,ObjectId } from "mongodb";
import Head from "next/dist/shared/lib/head";


function MeetupDetails(props){
    return <Fragment>
        <Head>
            <title>{props.meetupData.title}</title>
            <meta name="description" content="see the details"/>
        </Head>
        <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
    />
    </Fragment>
}

//pregenerated all the dynamic value (meetupId) --> is used for dynamic pages
//every possible meetId in a path should be written in the params object (jadi tau mau dibawa kemana pagenya)
// dia nentuin value apa yg diperluin buat getstaticprops cari di proses build
// getStaticPaths return all the available id
export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://adell:curlyhair@cluster0.qsr35ml.mongodb.net/meetUps?retryWrites=true&w=majority');
    const db = client.db()

    const meetupsCollection = db.collection('meetUps');

    //first param itu untuk filter
    //fetch object that only contains the id
    const meetups  = await meetupsCollection.find({},{_id:1}).toArray()

    client.close()

    return {
        fallback:'blocking', // kalo ga nemu params yg direquest bakal 404 error ; blocking supaya ga return 404
        paths:meetups.map(meetup=>({
            params:{meetupId:meetup._id.toString()}
        }))
    }
}

//cant use react hooks in getstaticprops
//allows to fetch data and return in props
//run during build process in terminal
export async function getStaticProps(context){
    const meetupId = context.params.meetupId // for getting the meetupId (from getStaticPaths) dengan value yg ada di url

    //ga akses ke new-meetup karna dia kan pas proses build, kalo fetch ke link lain jadi redundant
    const client = await MongoClient.connect('mongodb+srv://adell:curlyhair@cluster0.qsr35ml.mongodb.net/meetUps?retryWrites=true&w=majority');
    const db = client.db()

    const meetupsCollection = db.collection('meetUps');

    //diwrap pake objectid supaya disearchnya gampang
    const selectedMeetUp = await meetupsCollection.findOne({_id:ObjectId(meetupId)});

    return {
        props:{
            meetupData:{
                id:selectedMeetUp._id.toString(),
                title:selectedMeetUp.title,
                address:selectedMeetUp.address,
                image:selectedMeetUp.image,
                description:selectedMeetUp.description
            }
        }
    }
}

export default MeetupDetails; 