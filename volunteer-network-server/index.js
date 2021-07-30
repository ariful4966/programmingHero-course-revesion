const express = require("express");
const app = express();
const axios = require("axios")


app.get('/', (req, res) => {
    res.send('Hello World')
})
app.listen(2400, () => {
    console.log("Server started at port 2400");
});