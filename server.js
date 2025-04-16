import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./src/routes/productRoutes.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
console.log(PORT)

app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); //? Enable Cross-Origin Resource Sharing to allow frontend and backend to communicate
app.use(helmet()); //? helmet is security middleware that helps you protect your app by setting various http headers
app.use(morgan("dev")); // log the request

app.get("/", (req,res)=>{
    console.log(res.getHeaders());
    res.send("hello from the backend")
})

app.use("/api/products" , productRoutes)

app.listen(PORT, ()=>{
    console.log("server is running on port "  + PORT)
})