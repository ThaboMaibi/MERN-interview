const mongoose = require('mongoose')

const Schema = mongoose.Schema

  const secondSchema = new Schema({
    postTitle:{
        type: String,
        required: true
    },
    postBody:{
        type: String,
        required: true
    },
    userId  :{
        type: String,
        required: true
    }
  },{timestamps:true})

  module.exports=mongoose.model('Block',secondSchema)