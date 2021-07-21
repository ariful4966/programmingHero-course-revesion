require('dotenv').config(); 
const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express()


app.use(cors())
app.use(bodyParser.json())

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const uri = `mongodb+srv://${user}:${pass}@cluster0.nine7.mongodb.net/emaJohnStore?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const productsCollection = client.db("emaJohnStore").collection("products");
  const ordersCollection = client.db("emaJohnStore").collection("orders");
  console.log('Ema-John-Store database connected successfully');

  app.get('/', (req,res)=>{
    res.send("Hello World");
  })
  app.get('/products', (req, res) => {
    productsCollection.find({})
    .toArray((err,document)=>{
      res.send(document)
    })
  });

  app.post('/addProduct', (req, res) => {
    const product = req.body
    
    productsCollection.insertOne(product)
      .then(result => {
        console.log(result.insertedCount);
        res.send(result.insertedCount)
      })
  })

  //Order Infor
  app.post('/addOrder', (req, res) => {
    const order = req.body
    ordersCollection.insertOne(order)
      .then(result => {
        res.send(result)
      })
  })

})

app.listen(process.env.PORT) 

