    import mongoose from "mongoose";
    import dotenv from "dotenv";

    // Load environment variables *before* using them
    dotenv.config(); // No need for the path here if .env is in the same directory

    const databaseConnection = () => {
    const URI = process.env.MONGO_URI; 

    if (!URI) {
        console.error("MONGODB_URI is not defined. Please set the environment variable.");
        return; 
    }

    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.error("Database connection failed:", error);
    });
    };

    export default databaseConnection;