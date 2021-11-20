
const Post = require('../models/post');

const checkForErrors = ({ title, body , tech_skills }) => {
  let errors = {};
  let isValid = false;
  if (title === '') {
      errors = { ...errors, title: 'This field is required' }
  }
  if (body === '') {
      errors = { ...errors, body: 'This field is required' }
  }
  if (tech_skills === '') {
    errors = { ...errors, tech_skills: 'This field is required' }
  }
  isValid = true;
  return { isValid, errors };
}

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
    .populate("PostedBy","_id name")
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
  const title = req.body.title || '';
  const body = req.body.body || '';
  const tech_skills = req.body.tech_skills || '';

  const { isValid, errors } = checkForErrors({ title,body,tech_skills });

  if (isValid) {
      const updatedPost = {
          title: req.body.title,
          body: req.body.body,
          tech_skills:req.body.tech_skills,
      };

      Post.findByIdAndUpdate(req.params.id, updatedPost, err => {
          if (err) throw err;
          else res.json({ success: 'Post is updated' });
      });
  } else {
      res.json({ errors });
  }
};


