const express = require("express");
const router= express.Router();

const School= require('../models/school');

router.get("/getallschools", async(req,res)=>{
    try{
    const schools = await School.find({}); 
    console.log('Schools retrieved:', schools); 
    return res.json({schools});
    }catch(error){
        return res.status(400).json({ message: error.message });
    }
});

module.exports=router;