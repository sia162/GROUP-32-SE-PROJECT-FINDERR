const router = require('express').Router();
let User = require('../models/user.model');


router.post('/signin',(req,res)=>{

});

router.post('/signup',(req,res)=>{
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
          user:data
        })
      }
    })
  })
});




module.exports=router;