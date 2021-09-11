require("dotenv").config();
const connectDB = require("./config/db");
const express = require('express');

// routes connection
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express(); // Initialized the application
app.use(express.json()); // middleware to pass data as json objects

// Initializing routes (middleware)
app.use('products', productRoutes);

 
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is running  on port ${PORT}`));