const express = require('express')
const { MongoClient } = require('mongodb');
const app = express()
const port = 5000




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nine7.mongodb.net/burjAlArab?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("burjAlArab").collection("bookings");
  console.log('Database Connection Succefully');


  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
});



app.listen(port)