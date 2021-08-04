require('dotenv').config()
const express = require("express");
const { MongoClient, ObjectId } = require('mongodb');
const bodyPerser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyPerser.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nine7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const categoryCollection = client.db(`${process.env.DB_NAME}`).collection("categoris");
    const registationCollection = client.db(`${process.env.DB_NAME}`).collection("registations");

    console.log('Database connection Successfully');


    // app.post('/', (req, res) => {
    //     const data = req.body;
    //     categoryCollection.insertMany(data)
    //         .then(result => {
    //             console.log(result);
    //         })
    // })

    app.get('/', (req, res) => {
        categoryCollection.find({})
            .toArray((err, document) => {
                res.send(document)
            })
    })

    app.post('/registation', (req, res) => {
        const regData = req.body
        registationCollection.insertOne(regData)
            .then(result => {
                res.send(result)
            })
    })

    app.get('/registation', (req, res) => {
        registationCollection.find({})
            .toArray((err, document) => {
                res.send(document)
            })
    })

    app.delete('/events/:id', (req, res) => {
        registationCollection.deleteOne({ _id: ObjectId(req.params.id) })
        .then(result=>{
            res.send(result) 
        })
    })

});


app.listen(2400, () => {
    console.log("Server started at port 2400");
});  