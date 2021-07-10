const express = require('express');

const app = express()
const users = ['Asad', 'Moin', 'Sabed', 'Susmita', 'Sohana', 'Sabana']

app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: 220
    }
    res.send(fruit)
})

app.get('/fruits/banana', (req, res)=>{
    res.send({fruit:'Banan', quantiry: 1000, price: 10000})
})
app.get('/users/:id', (req, res)=>{
    const id = req.params.id
    const name = users[id]
    res.send({id, name})
    console.log(req.query.sort);
})

app.listen(4200, () => console.log('Listenting to port 4200'))