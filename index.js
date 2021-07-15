const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

const uri = "mongodb+srv://nodeMongo:nodeMongo@cluster0.nine7.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("organicdb").collection("products");

  app.get('/products', (req, res) => {
    collection.find({})
      .toArray((error, documents) => {
        res.send(documents)
      })
  })

  app.get('/product/:id', (req, res) => {
    collection.find({ _id: ObjectId(req.params.id) })
      .toArray((err, document) => {
        res.send(document[0])
      })
  })

  app.post('/addProduct', (req, res) => {
    const product = req.body;
    collection.insertOne(product)
      .then(result => {
        console.log('data added successfully');
        res.send('success')
      })
  })
  app.patch('/update/:id', (req, res) => {
    collection.updateOne({ _id: ObjectId(req.params.id) }, {
      $set: { price: req.body.price, quantity: req.body.quantity }
    })
    .then(result=>{
      console.log(result.modifiedCount);
    })
  })

  app.delete('/delete/:id', (req, res) => {
    collection.deleteOne({ _id: ObjectId(req.params.id) })
      .then((result) => {
        console.log(result.deletedCount);
      })
  })
});



app.listen(4000, () => {
  console.log('Running server is port 4000');
})