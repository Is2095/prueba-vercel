const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("la página de inicio ");
})

module.exports = app