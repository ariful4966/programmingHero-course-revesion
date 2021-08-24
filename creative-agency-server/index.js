require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb');

const app = express();

app.use(cors())
app.use(bodyParser.json())


const port = process.env.PORT || 5000;



const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.nine7.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const serviceCollection = client.db(`${process.env.DATABASE_NAME}`).collection("services");

    app.post('/service', (req, res) => {
        const service = req.body;
        serviceCollection.insertOne(service)
            .then(result => {
                if (result) {
                    res.send(result.acknowledged)
                }
            })
    })
    app.get('/service', (req, res) => {
        serviceCollection.find({})
            .toArray((err, document) => {
                res.send(document)
            })
    })

    app.get('/', (req, res) => {
        res.send('Your Database is running on')
    })
});









app.listen(port, () => console.log(`Listening on port ${port}...`));