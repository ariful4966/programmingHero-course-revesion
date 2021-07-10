const express = require('express');

const app = express()

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

app.listen(4200, () => console.log('Listenting to port 4200'))