const mongoose = require('mongoose');

const connectString = process.env.DATABASE_CONNECTOR;

const connectDB = async () =>{
    try {

        await mongoose.connect(connectString, {
    
            useUnifiedTopology: true,
            useNewUrlParser: true

        });

        console.log('Mongodb connection success ...');
        
    } catch (error) {
        console.log('Mongodb connection fail ...');
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;