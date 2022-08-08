import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/dist/client/router'
import { Fragment } from 'react'
import Head from 'next/dist/shared/lib/head'

function NewMeetupPage(){
    const router = useRouter()
    async function addMeetupHandler (enteredMeetData) {
        const response = await fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify(enteredMeetData),
            headers:{
                'Content-Type':'application/json'
            }
        }) //request function in the api

        const data = await response.json() //ambil res dari api new-meetup

        console.log(data)

        router.push('/')
    }


    return <Fragment>
        <Head>
            <title>Add A new page</title>
            <meta name='description' content='add your own meetups and create it'/>
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
}

export default NewMeetupPage;