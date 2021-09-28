const mongoose = require('mongoose');

const connectString = "";

const connectDB = async () =>{
    try {

        await mongoose.connect(connectString, {
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useNewUrlParser: true

        });

        console.log('Mongodb connection success ...');
        
    } catch (error) {
        console.log('Mongodb connection fail ...');
        console.log(error);
    }
}