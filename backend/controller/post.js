
const Post = require('../models/post');

exports.createpost = (req, res) => {
  const {title,body,tech_skills} = req.body 
    if(!title || !body || !tech_skills){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    req.user.password = undefined

    const post = new Post({
        title,
        body,
        tech_skills,
        postedBy:req.user
    })

    post.save().then(result=>{
      res.json({post:result})
    })
    .catch(err=>{
      console.log(err)
    })
    
};
