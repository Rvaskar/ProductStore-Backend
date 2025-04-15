import express from "express";
import helmet from "helmet";
import morgan from "morgan"

const app = express();

app.use(helmet()); //? helmet is security middleware that helps you protect your app by setting various http headers

app.use(morgan("dev")); // log the request

app.get("/", (req,res)=>{
    console.log(res.getHeaders());
    res.send("hello from the backend")
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})