const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Welcome to NodeJS');
})

app.post('/signup', (req, res) => {
    res.send('Signup API');
})


app.listen(port, () => {
    console.log('Server is Running!')
})