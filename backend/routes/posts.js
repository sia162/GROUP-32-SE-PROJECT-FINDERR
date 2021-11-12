const router = require('express').Router();
let User = require('../models/user.model');
let Post = require('../models/post.model');


router.post('/post',(req,res)=>{
  User.findOne({user:req.body.user})
  .exec((error,user)=>{
    if(error) return res.status(400).json({
      message:'you are not registered '
    });

    const{
      username,
      title,
      description,
      techskills
    }=req.body;
    const _post = new Post({
      username,
      title,
      description,
      techskills
    })

    _post.save((error,data) =>{
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