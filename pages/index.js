import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from "mongodb";
import { Fragment } from 'react';
import Head from 'next/dist/shared/lib/head';

function HomePage(props) {
    //Karena pake getStaticProps jadi gausa useEffect useState
    // const [loadedMeetups,setLoadedMeetups]=useState([])

    // useEffect(()=>{
    //     setLoadedMeetups(DUMMY_MEETUPS)
    // },[])

    return <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta name='description'
            content='browse something'
            />
        </Head>
        <MeetupList meetups={props.meetups}/>
    </Fragment>
}

//call static props before running the components
//can be async, wait until static props fetched then run the component
//is called during the build proccess, never sampe di machine user/client side
export async function getStaticProps(){
    //FETCH DATA FROM API
    //harus return porps
    
    const client = await MongoClient.connect('mongodb+srv://adell:curlyhair@cluster0.qsr35ml.mongodb.net/meetUps?retryWrites=true&w=majority');
    const db = client.db()

    const meetupsCollection = db.collection('meetUps');

    const meetups = await meetupsCollection.find().toArray(); //return array of meetups

    client.close()

    return {
        props:{
            meetups: meetups.map((meetup)=>({
                title:meetup.title,
                image:meetup.image,
                address:meetup.address,
                id:meetup._id.toString()
            }))
        },
        revalidate:10 //10s until next js check is there any requests coming in (update every newest data updated)
    }
}

//CARA KEDUA :generated every incoming request (cara pertama is better)
// export async function getServerSideProps(context){
//     const req = context.req cek ada request sama response ga
//     const res = context.res

//     return{
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage;