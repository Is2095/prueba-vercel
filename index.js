
const app = require("./src/app");
const connectMongo = require("./src/DB_connection");
const port =  3001;
connectMongo()
app.listen(port, () => console.log(`listen on PORT ${port}`));
