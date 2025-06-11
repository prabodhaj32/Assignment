import express from "express"; 
import mongoose from "mongoose"; 
import dotenv from "dotenv"; 
import cors from "cors"; 

const app = express(); 

dotenv.config(); 

app.use(express.json()); 
app.use(cors()); 

const PORT = process.env.PORT || 7000; 

const MONGOURL = process.env.MONGO_URL; 
 
mongoose 
.connect("mongodb://127.0.0.1:27017/futurec", { 
useNewUrlParser: true, 
useUnifiedTopology: true, 
}) 
.then(() => { 
console.log("Database connected successfully."); 

    app.listen(PORT, () => { 
      console.log(`Server is running on port ${PORT}`); 
    }); 
  }) 
  .catch((error) => { 
    console.error("Error connecting to MongoDB:", error); 
  }); 