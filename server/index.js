require('dotenv').config()
const express = require('express')
const { MongoClient } = require('mongodb');
const admin = require('firebase-admin');
const cors = require('cors');
const bodyParser = require('body-parser')


const app = express();
app.use(cors())
app.use(bodyParser.json())




const serviceAccount = require("./burj-al-arab-2773e-firebase-adminsdk-1kumo-967f651b55.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const port = 5000




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nine7.mongodb.net/burjAlArab?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("burjAlArab").collection("bookings");
  console.log('Database Connection Succefully');


  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.post('/addBooking', (req, res) => {
    const newBooking = req.body;
    collection.insertOne(newBooking)
      .then(result => {
        res.send(result)
      })
    console.log(newBooking);
  })

  app.get('/bookings', (req, res) => {
    const bearer = req.headers.authorization
    if (bearer && bearer.startsWith('Bearer ')) {
      const idToken = bearer.split(' ')[1];

      admin
        .auth()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
          const tokenEmail = decodedToken.email;
          const queryEmail = req.query.email;
          if (tokenEmail == queryEmail) {
            collection.find({ email: queryEmail })
              .toArray((err, documents) => {
                res.status(200).send(documents)
              })
          } else {
            res.status(401).send('un-authrize access')
          }
        })
        .catch((error) => {
          res.status(401).send('un-authrize access')
        });
    } else {
      res.status(401).send('un-authrize access')
    }
  })
});



app.listen(port)