const { Timestamp } = require("bson");
const mongoose =require("mongoose");

const schoolSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    ratings:{
        type:Number,
        required:true
    },
    contact:{
        type:String,
        required: true
    },
    imageurls:[],

    description:{
        type:String,
        required:true
    }
}, {
    timestamps:true
});

const School=mongoose.model('schools',schoolSchema);

module.exports= School;