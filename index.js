const express = require("express");
const app = express();

const port =  3001;

app.get("/", (req, res) => {
    res.send("la página de inicio ");
})
app.listen(port, () => console.log(`listen on PORT ${port}`));
