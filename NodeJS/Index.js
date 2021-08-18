const express = require('express');
const cors = require('cors')
const bd = require('body-parser')
const app = express();
const port = 5000;

app.use(cors());
app.use(bd.urlencoded({
    extended: false
}))
app.use(bd.json());

app.get('/', (req, res) => {
    res.send('Welcome to NodeJS');
})

app.post('/signup', (req, res) => {
    // res.send('Signup API');
    console.log(req.body)
})


app.listen(port, () => {
    console.log('Server is Running!')
})