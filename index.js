const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('I Know How to open Node.... YAY')
})

app.listen(4200, () => console.log('Listenting to port 4200'))