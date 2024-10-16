import express from "express"
import dotenv from "dotenv"
import "./Models/db.js"
import bodyParser from "body-parser"
import cors from "cors"
import AuthRoutes from "./Routes/AuthRoutes.js"
import ProductRouter from "./Routes/ProductRouter.js"

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("Hello, World!")
})
app.use(bodyParser.json())
app.use(cors())

app.use("/auth", AuthRoutes)
app.use("/products", ProductRouter)
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)  
})