const mongoose = require("mongoose");

const mongoURL='mongodb+srv://mehak:mhksmz@atlascluster.nhxgiif.mongodb.net/schoolDatabase'

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser:true});

const connection= mongoose.connection;

connection.on('error',(error)=>{
    console.log('Mongo DB Connection failed:', error);
});

connection.on('connected',()=>{
    console.log('Mongo DB Connection Successful');
});

module.exports=mongoose;