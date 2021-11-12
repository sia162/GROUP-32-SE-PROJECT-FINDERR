
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
exports.signup=(req,res)=>{
  User.findOne({email:req.body.email})
  .exec((error,user)=>{
    if(user) return res.status(400).json({
      message:'User already exists '
    });

    const{
      username,
      email,
      password,
      techskills
    }=req.body;
    const _user = new User({
      username,
      email,
      password,
      techskills
    })

    _user.save((error,data) =>{
      if(error){
        return res.status(400).json({
          message: 'Something went wrong'
        });
      }
      if(data){
        return res.status(201).json({
          message : " User created sucessfully"
        })
      }
    })
  })
}

exports.signin = (req,res)=>{
  User.findOne({email: req.body.email})
  .exec((error,user)=>{
    if(error) return res.status(400).json({error});
    if(user){
      if(user.aunthenticate(req.body.password)){
        const token = jwt.sign({_id: user._id},process.env.JWT_SECRET,{expiresIn: '1hr'});

        const {username,email,password,techskills}=user
      }
    }else{
      return res.status(400).json({message:"something went wrong"})
    }
  })
}