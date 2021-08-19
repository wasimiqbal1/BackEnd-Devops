const express = require('express');
const cors = require('cors')
const bd = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const port = 5000;

app.use(cors());
app.use(bd.urlencoded({
    extended: false
}))
app.use(bd.json());

mongoose.connect('mongodb+srv://wasim:P@ss1234@cluster0.flcnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
    console.log("Datebase Connected")
})
mongoose.connection.on("error", () => {
    console.log("Datebase Not Connected")
})

app.get('/', (req, res) => {
    res.send('Welcome to NodeJS');
})

app.post('/signup', (req, res) => {
    // res.send('Signup API');
    console.log(req.body.post.postName)
})


app.listen(port, () => {
    console.log('Server is Running!')
})