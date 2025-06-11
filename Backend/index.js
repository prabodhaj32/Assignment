import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from './routers/userRoutes.js'
import productRoutes from './routers/productRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

mongoose 
.connect("mongodb://127.0.0.1:27017/futurec", { 
useNewUrlParser: true, 
useUnifiedTopology: true, 
}) 
.then(() => { 
console.log("Database connected successfully."); 

    app.use('/api/users', userRoutes);
    app.use('/api/products', productRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
