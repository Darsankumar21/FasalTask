
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
databaseConnection();

dotenv.config({
    path:".env"
})

const app = express();
//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: ["https://fasal-task-iwzq-evj4ymduz-darsankumars-projects.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}
app.use(cors(corsOptions));
 
// api
app.get("/",(req,res) =>{
  res.json("Hello")
})
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
});
