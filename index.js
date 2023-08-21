import express from "express"
import cors from "cors"
import "./model/connection.js"

const app = express();
app.use(cors());
app.use(express.json());

const PORT  = process.env.PORT|| 8081


import userRouter from "./routes/router.js"
app.use("/user",userRouter);


app.listen(PORT,()=>console.log("Server is running"));