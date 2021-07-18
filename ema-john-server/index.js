require('dotenv').config(); 
const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nine7.mongodb.net/emaJohnStore?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("emaJohnStore").collection("products");
  console.log('Ema-John-Store database connected successfully');


  app.get('/', (req, res) => {
    res.send('Hello ema watson!')
  });

  app.post('/addProduct', (req, res) => {
    const products = req.body
    
    collection.insertMany(products)
      .then(result => {
        console.log(result.insertedCount);
        res.send(result.insertedCount)
      })
  })


})

app.listen(process.env.PORT) 

