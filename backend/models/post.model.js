const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username:{
    type: String,
    required: true,
    unique:true,
    trim:true,
    minlength:3,
    index:true
  },
  title:{
    type:String,
    required:true,
    trim:true
  },
  description:{
    type:String,
    required:true,
    trim:true
  },
  tech_skills:{
    type:String,
    required:true
  }

},{
  timestamps:true
});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;