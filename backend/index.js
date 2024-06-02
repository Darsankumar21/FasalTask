
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
PORT=8080;
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
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOptions));
 
// api
app.get("/",(req,res) =>{
  res.json("Hello")
})
app.use("/api/v1/user", userRoute);

app.listen(PORT,() => {
    console.log(`Server listen at port ${PORT}`);
});
