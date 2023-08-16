const express = require("express");
const Favorite = require("./models/Favorite");

const app = express();

app.get("/pag", (req, res) => {
    res.send("la página de inicio ");
})
app.get("/rick", async (req, res) => {
    try {
        const favAll = await Favorite.find()
        console.log(favAll, '*********************');
        return res.status(200).json(favAll)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

module.exports = app