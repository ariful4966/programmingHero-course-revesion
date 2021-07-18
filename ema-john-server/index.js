require('dotenv').config()
const express = require('express')
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()


app.use(bodyParser.json())
app.use(cors())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.PASS}@cluster0.nine7.mongodb.net/emaJohnStore?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const products = client.db("emaJohnStore").collection("products");
  console.log('Ema-John-Store database connected successfully');


  app.get('/', (req, res) => {
    res.send('Hello ema watson!')
  });
  
  app.post('/addProduct', (req, res)=>{
    const product = req.body()
    products.insertOne(product)
    .then(result=>{
      console.log(result);
    })
  })
  app.listen(process.env.PORT, () => {
    console.log(`Server app listening at http://localhost:${process.env.PORT}`)
  })



})

