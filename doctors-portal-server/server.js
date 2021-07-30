require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.json())



console.log(process.env.DB_NAME);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nine7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const appoinmentsCollection = client.db(`${process.env.DB_NAME}`).collection('appoinments');
  const apCategorisCollection = client.db(`${process.env.DB_NAME}`).collection('appoinmentCategoris');

  console.log('Database Connected Successfully...');

  app.post('/appoinment', (req, res) => {
    const data = req.body
    appoinmentsCollection.insertOne(data)
      .then(result => {
        res.send(result)
      })
  });
  // app.post('/categoris', (req, res) => {
  //   const category = req.body;
  //   apCategorisCollection.insertMany(category)
  //     .then(result => {
  //       res.send(result)
  //     })
  // })


  app.get('/appoinments', (req, res) => {
    appoinmentsCollection.find({})
      .toArray((error, document) => {
        res.send(document)
      })
  })
  app.get('/categoris', (req, res)=>{
    apCategorisCollection.find()
    .toArray((err, document)=>{
      res.send(document)
    })
  })
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})