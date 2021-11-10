const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:{
    type: String,
    required: true,
    unique:true,
    trim:true,
    minlength:3,
    index:true
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true,
    lowercase:true
  },
  hash_password:{
    type:String,
    required:true
  },
  tech_skills:{
    type:String,
    required:false
  }

},{
  timestamps:true
});

userSchema.virtual('password')
.set(function(password){
  this.hash_password=bcrypt.hashSync(password,10);
})
userSchema.methods={
  authenticate:function(){
    return bcrypt.compareSync(password,this.hash_password);
  }
}
const User = mongoose.model('User',userSchema);

module.exports = User;