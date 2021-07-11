const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); //for get request
app.use(bodyParser.json()) //for post request
const users = ['Asad', 'Moin', 'Sabed', 'Susmita', 'Sohana', 'Sabana']

app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: 220
    }
    res.send(fruit)
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id
    const name = users[id]
    res.send({id, name})
    console.log(req.params);
})

// post
app.post('/addUser', (req, res)=>{
    console.log(req.body);
})

app.listen(4200, () => console.log('Listenting to port 4200'))