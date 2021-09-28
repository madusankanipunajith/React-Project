require('dotenv').config();
const express = require('express');
var cors = require('cors');
const connectDB = require('./config/db');

connectDB();

const app = express();

// middlewares
app.use(cors(
    {
      
    origin:['http://localhost:3000','http://192.168.56.1:3000','https://localhost:8080','http://localhost:8081','https://localhost:8081','https://localhost:8082','https://localhost:8083','http://localhost:8080','http://localhost:8082','http://localhost:8083'],
  
    methods:['GET','POST','DELETE', 'PUT'],
    credentials: true
  
  }        
));
app.use(express.json());

// routes
app.use("/api/v1/bootcamps", require("./routes/bootcampRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));