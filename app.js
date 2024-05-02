const express = require('express')
const ejs = require('ejs')
const path = require('path');
require('dotenv').config();


const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
//app.use(express.static("public"))
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;
// const PORT = 3000 || process.env.PORT ;


app.get("/", function(req, res) {
    res.render('index')
})

app.get("/feature", function(req, res) {
    res.render('feature')
})

app.get("/reviews", function(req, res) {
    res.render('reviews')
})


app.get('*', (req, res) => {
    res.render('Error', {
        
    })
})


app.listen(PORT, function(){
    console.log("Server is running on port "+ PORT)
})

