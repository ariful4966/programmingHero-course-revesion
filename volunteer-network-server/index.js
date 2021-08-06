require('dotenv').config()
const express = require("express");
const { MongoClient, ObjectId } = require('mongodb');
const bodyPerser = require('body-parser')
const cors = require('cors')
const admin = require('firebase-admin');

const app = express();

app.use(cors())
app.use(bodyPerser.json())

const serviceAccount = require('./volunteer-network-2bbc0-firebase-adminsdk-wqv2d-7fe5864da9.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nine7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const categoryCollection = client.db(`${process.env.DB_NAME}`).collection("categoris");
    const registationCollection = client.db(`${process.env.DB_NAME}`).collection("registations");

    // console.log('Database connection Successfully');


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

        const bearer = req.headers.authorization;
        if (bearer && bearer.startsWith('Bearer ')) {
            const idToken = bearer.split(' ')[1];

            admin
                .auth()
                .verifyIdToken(idToken)
                .then((decodedToken) => {
                    const tokenEmail = decodedToken.email;
                    const usrEmail = req.query.email;
                    if (tokenEmail == usrEmail) {
                        registationCollection.find({ email: usrEmail })
                            .toArray((err, document) => {
                                res.send(document)
                            })
                    }
                })

        }


    })

    app.get('/registations', (req, res) => {
        const email = req.query.email;
        const userMail = `ariful4966@gmail.com`
        if (email === userMail) {

            const bearer = req.headers.authorization;

            if (bearer && bearer.startsWith('Bearer ')) {
                const idToken = bearer.split(' ')[1];

                admin
                    .auth()
                    .verifyIdToken(idToken)
                    .then((decodedToken) => {
                        const tokenEmail = decodedToken.email;
                        const usrEmail = req.query.email;
                        if (tokenEmail == usrEmail) {
                            registationCollection.find({})
                                .toArray((err, document) => {
                                    res.send(document)
                                })
                        }
                    })

            }
        }
    })







    app.delete('/events/:id', (req, res) => {
        registationCollection.deleteOne({ _id: ObjectId(req.params.id) })
            .then(result => {
                res.send(result)
            })
    })



    app.get('/search', (req, res) => {

        const search = req.query.filter;

        categoryCollection.find({ name: { $regex: search } })
            .toArray((err, document) => {
                res.send(document)
            })
    })

    app.post('/addEvent', (req, res) => {
        const eventEmail = req.query.email;
        const adminEmail = `ariful4966@gmail.com`;

        const eventData = req.body


        if (eventEmail === adminEmail) {

            const beaRer = req.headers.authorization;

            if (beaRer && beaRer.startsWith('Bearer ')) {
                const eventIdToken = beaRer.split(' ')[1];
                admin
                    .auth()
                    .verifyIdToken(eventIdToken)
                    .then((decodedToken) => {
                        const jWtToken = decodedToken.email;

                        if (eventEmail === jWtToken) {
                            categoryCollection.insertOne(eventData)
                                .then(result => {
                                    res.send(result)
                                })
                        }
                    })



            }


        } else {
            res.send({ message: 'You are not Admin' })
        }

    });


});


app.listen(2400);