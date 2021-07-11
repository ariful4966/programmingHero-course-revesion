const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send('Hello I am working');
})

const uri = "mongodb+srv://nodeMongo:nodeMongo@cluster0.nine7.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  console.log('Database connected'); 
  client.close();
});



app.listen(4000, ()=>{
    console.log('Running server is port 4000');
})