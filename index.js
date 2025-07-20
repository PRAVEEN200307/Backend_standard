import express from "express"
import router from "./Routes/routes.js"
import { ConnectDb } from "./Db/server.js";
const app = express();
const port = 3000


// Middleware must come before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

ConnectDb();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})