require('dotenv').config()
const express = require('express')
const { MongoClient } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser')


const app = express();
app.use(cors())
app.use(bodyParser.json())

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
      console.log(req.headers.authorization);
    collection.find({  })
      .toArray((err, documents) => {
        res.send(documents)
      })
  })


});



app.listen(port)