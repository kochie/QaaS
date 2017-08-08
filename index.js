const express = require("express");
const path = require("path");
const quotes = require("./quotes.json");

const app = express();

getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/api/quotes/random', (req, res) => {
    var i = getRandomInt(0,quotes.length-1);
    res.status(200).send(quotes[i]);
})

app.get('/api/quotes', (req, res) => {
    res.status(200).send(quotes);
})

app.get("/api/quotes/:number", (req, res) => {
    if (req.params.number > quotes.length) {
        res.status(401).send("Yo, That number is too high. #420");
    } else if (req.params.number < 1) {
        res.status(401).send("Lach, stop sending negative numbers...")
    } else {
        res.status(200).send(quotes[req.params.number-1]);
    }
})

app.use('/', express.static(path.join(__dirname, "srv")));

app.listen(3000, function () {
  console.log('SMEEaaS app listening on port 3000!');
})
