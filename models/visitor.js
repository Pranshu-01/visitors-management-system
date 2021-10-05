const mongoose = require('mongoose');

const visitorSchema=new mongoose.Schema({
     name:{
         type:String,
         trim:true,
         required:true
     },
     phone:{
         type:Number,
         min:10,
         required:true
     },
     email:{
        type:String,
        trim:true,
        required:true
    },
    date:{
        type:Date,
    }
});
const Visitor=mongoose.model('Visitor',visitorSchema);

module.exports=Visitor;
