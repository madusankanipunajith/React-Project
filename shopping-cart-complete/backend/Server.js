require("dotenv").config();
const connectDB = require("./config/db");
const express = require('express');
const cors = require('cors');

// routes connection
const productRoutes = require("./routes/productRoutes");

connectDB();


const app = express(); // Initialized the application

// cors policy
app.use(cors(
    {
    origin:['http://localhost:3000','http://192.168.56.1:3000'],
  
    methods:['GET','POST','DELETE', 'PATCH'],
    credentials: true
    }        
));

app.use(express.json()); // middleware to pass data as json objects

// Initializing routes (middleware)
app.use('/products', productRoutes);

 
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is running  on port ${PORT}`));