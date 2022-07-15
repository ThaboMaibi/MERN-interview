const  Mycollection  = require('../models/DbModel')
const mongoose = require('mongoose')
const  block  = require('../models/Block')

// for creating a new user
const createNewEntry= async (req,res)=>{
    const  {password, username} = req.body;
    // console.log(req.body);
    try {
        const document = await Mycollection.create({password, username});
        const userId = document._id;
        res.status(200).json( {'status':true,'message':'succefull',userId});
    } catch (error) {
        res.status(400).json({error: error.message})   
       }
}
// for getting all entries
const getAllEntries= async (req,res)=>{
    try {
        const document = await Mycollection.find({}).sort({createdAt: -1});
        if(!document){
            res.status(404).json({error:'no data found'});
        }
        res.status(200).json(document);
    } catch (error) {
        res.status(400).json({error: error.message})   
       }
}

const createNewBlock= async (req,res)=>{
    const  {postTitle, postBody, userId} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'id not valid'});
    }else{
        try {
            const document = await block.create({postTitle, postBody, userId});
            res.status(200).json( {'status':true,'message':'succefull'});
        } catch (error) {
            res.status(400).json({error: error.message})   
           }
    }
}

module.exports={
    createNewEntry,getAllEntries,createNewBlock
}