const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema(
  {
  title: { 
    type:String, 
    required:true
  },
  body: {
     type:String, 
     required:true
    },
  tech_skills: {
     type:String, 
     required:true
    },
  postedBy:{
    type:ObjectId,
    ref:"User"}
},{
  timestapms:true
});

const Post = mongoose.model('Post',postSchema);

module.exports=Post