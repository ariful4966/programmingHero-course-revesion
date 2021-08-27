require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const { MongoClient, ObjectId } = require('mongodb');

const app = express();

app.use(cors())
app.use(bodyParser.json())


const port = process.env.PORT || 5000;



const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.nine7.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const serviceCollection = client.db(`${process.env.DATABASE_NAME}`).collection("services");
    const orderCollection = client.db(`${process.env.DATABASE_NAME}`).collection("orders");
    const adminCollection = client.db(`${process.env.DATABASE_NAME}`).collection("admins");

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

    app.post('/order', (req, res) => {
        const order = req.body;
        orderCollection.insertOne(order)
            .then(result => {
                if (result) {
                    res.send(result.acknowledged)
                }
            })
    })
    app.get('/order', (req, res) => {
        const email = req.query.email
        adminCollection.find({ email: email })
            .toArray((err, document) => {
                if (document.length > 0) {
                    orderCollection.find()
                        .toArray((err, doc) => {
                            res.send(doc)
                        })
                } else {
                    orderCollection.find({ email: email })
                        .toArray((err, doc) => {
                            res.send(doc)
                        })
                }
            })


    })
    app.put('/order', (req, res) => {
        const { id, status } = req.body;
        orderCollection.updateOne(
            { _id: ObjectId(`${id}`) },
            { $set: { status: `${status}` } }
        )
            .then(result => {
                res.send(result.acknowledged);
            })
    })
    app.post('/admin', (req, res) => {
        const admin = req.body;
        adminCollection.find(admin)
            .toArray((err, document) => {
                if (document.length === 0) {
                    adminCollection.insertOne(admin)
                        .then(result => {
                            if (result.acknowledged) {
                                res.send('Successfully Add a Admin')
                            }
                        })
                } else {
                    res.send('This Admin Already Added')
                }

            })

    })
    app.get('/admin', (req, res) => {
        const email = req.query.email;
        adminCollection.find({ email: email })
            .toArray((err, document) => {
                res.send(document)
            })
    })

    app.get('/', (req, res) => {
        res.send('Your Database is running on')
    })
});









app.listen(port);