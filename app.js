const express = require("express");
const app = express();
const hbs = require('hbs');
const data = require("./data/data")
require('dotenv').config();


// Port
const port = process.env.PORT || 8000;

// App config
app.set("view engine", "hbs")

// HBS config
hbs.registerPartials(__dirname + "/views/partials")

// Middleware
app.use(express.static("public"));


// Routes
app.get("/", function (req, res) {
    res.render('index', {
        portfolio: data
    });
});

app.get("/portfolio-details", function (req, res) {
    res.render('portfolio-details', {
        header_extra_class: " header-inner-pages"
    });
});

app.get("/elements", function (req, res) {
    res.render('elements');
});


app.get("*", function (req, res) {
    res.sendFile(__dirname + "/public/404.html");
});


// App
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port} `);
});
