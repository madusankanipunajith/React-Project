require("dotenv").config();
const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log('database is connected succesfully');
    }catch(e){
        console.log(e);
    }
}

module.exports = connectDB;