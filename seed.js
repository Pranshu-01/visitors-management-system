const mongoose=require('mongoose');
const { getMaxListeners } = require('./models/visitor');
const Visitor=require('./models/visitor');


const visitors=[
    {
        name:'Pranshu Goyal',
        phone:9896810553,
        email:'pranshugoyal01@gmail.com'
    },
    {
        name:'Rohit',
        phone:8671223890,
        email:'rohit@gmail.com'
    },
    {
        name:'Shubham',
        phone:7825210920,
        email:'shubham@gmail.com'
    },
   
];

const seedDB=async()=>{

    await Visitor.deleteMany({});
    await Visitor.insertMany(visitors);
    console.log('DB Seeded');
}
module.exports=seedDB;
