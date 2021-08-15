require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;



const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = 5000

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nine7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const appointmentCollection = client.db(`${process.env.DB_NAME}`).collection('appointments');


    app.post('/addAppointment', (req, res) => {

        const appointment = req.body;
        appointmentCollection.insertOne(appointment)
            .then(result => {
                res.send(result.acknowledged)
            })

    })
    app.post('/appointmentByDate', (req, res) => {
        const date = req.body;
        appointmentCollection.find(date)
            .toArray((err, result) => {
                res.send(result)
            })
    })


});



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT || port)
