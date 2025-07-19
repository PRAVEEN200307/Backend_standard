import express, { Router } from "express"
import router from "./Routes/routes.js"
const app = express();
const port = 3000
app.use(router)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})