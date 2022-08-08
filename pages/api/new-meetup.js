// define function contains server side code , will not appeared in client side
// path : /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req,res){
    if (req.method==='POST'){
        const data = req.body;
        const {title,image,address,description} = data

        //never run this code in the client side
        const client = await MongoClient.connect('mongodb+srv://adell:curlyhair@cluster0.qsr35ml.mongodb.net/meetUps?retryWrites=true&w=majority');
        const db = client.db()

        const meetupsCollection = db.collection('meetUps');

        //insert object
        const result = await meetupsCollection.insertOne(data)
        console.log(result);

        client.close() // close database after done using

        //201 : data inserted successfully status
        res.status(201).json({message:'Meetup Inserted'}) // buat ngasih response yang direturn
    }
}

export default handler;