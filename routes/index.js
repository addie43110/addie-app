const express = require('express');
const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

app.get("/home", (req, res) => res.send("home"));

app.get("/resume", (req, res) => res.send("resume"));

app.get("/blog", (req, res) => res.send("blog"));


app.listen(3001, () => console.log('Example app listening on port 3001'));

