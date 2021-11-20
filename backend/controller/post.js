
const Post = require('../models/post');

exports.createpost = (req, res) => {
  const {title,body,tech_skills} = req.body 
    if(!title || !body || !tech_skills){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    req.user.hash_password = undefined

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

exports.allPost = (req, res) => {
  Post.find()
    .populate("postedBy","_id name")
    .sort('-createdAt')
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
   
};

exports.myPost = (req, res) => {
  Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
};


exports.deletePost = (req, res) => {
  Post.findOne({_id:req.params.postId})
  .populate("postedBy","_id")
  .exec((err,post)=>{
      if(err || !post){
          return res.status(422).json({error:err})
      }
      if(post.postedBy._id.toString() === req.user._id.toString()){
            post.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                console.log(err)
            })
      }
  })
};



exports.updatePost = (req, res) => {
  const {title,body,tech_skills} = req.body 
    if(!title || !body || !tech_skills){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    Post.findById(req.params.id)
    .then(post => {
      post.title = req.body.title;
      post.body = req.body.body;
      post.tech_skills = req.body.tech_skills;
      
      post.save()
        .then(() => res.json('Post updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};



