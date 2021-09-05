const express = require('express');
const cors = require('cors')
const bd = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const port = 5000;
let authModel = require('./authschema');
const { response } = require('express');

app.use(cors());
app.use(bd.urlencoded({
    extended: false
}))
app.use(bd.json());

mongoose.connect('mongodb+srv://wasim:P@ss1234@cluster0.a8hoi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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

    let userCreate = new authModel({ email: req.body.email, password: req.body.password })
    userCreate.save()
        .then((response) => {
            // console.log(response, 'response Success')
            res.status(200).send({ result: response, message: "Data Stored Successfully" })

        })
        .catch((err) => {
            // console.log(err, 'Error')
            res.status(400).send({ result: err.message, message: "Data Not Stored Successfully" })
        })

})


app.listen(port, () => {
    console.log('Server is Running!')
})