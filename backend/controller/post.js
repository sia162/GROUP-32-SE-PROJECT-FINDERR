const Post = require("../models/post");

const checkForErrors = ({ title, body, tech_skills }) => {
  let errors = {};
  let isValid = false;
  if (title === "") {
    errors = { ...errors, title: "This field is required" };
  }
  if (body === "") {
    errors = { ...errors, body: "This field is required" };
  }
  if (tech_skills === "") {
    errors = { ...errors, tech_skills: "This field is required" };
  }
  isValid = true;
  return { isValid, errors };
};

exports.createpost = (req, res) => {
  const { title, body, tech_skills } = req.body;
  if (!title || !body || !tech_skills) {
    return res.status(422).json({ error: "Plase add all the fields" });
  }
  req.user.hash_password = undefined;

  const post = new Post({
    title,
    body,
    tech_skills,
    postedBy: req.user,
  });

  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.allPost = (req, res) => {
  Post.find()
    .populate("postedBy", "_id firstName lastName createdAt")
    .sort("-createdAt")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.myPost = (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id firstName lastName createdAt")
    .then((mypost) => {
      res.json({ mypost });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deletePost = (req, res) => {
  Post.findOne({ _id: req.params.id })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ error: err });
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
};

exports.updatePost = async (req, res) => {
  const { title, body, tech_skills } = req.body;
  const { isValid, errors } = checkForErrors({ title, body, tech_skills });

  const updatedPost = {};

  if (isValid) {
    if (title) {
      updatedPost.title = title;
    }
    if (body) {
      updatedPost.body = body;
    }
    if (tech_skills) {
      updatedPost.tech_skills = tech_skills;
    }

    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("not found");
    }

    if (post.postedBy._id.toString() === req.user._id.toString()) {
      post = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: updatedPost },
        { new: true }
      );
      // console.log(post);
      res.status(200).json(post);
    } else {
      return res.status(401).send("not allowed");
    }
  } else {
    res.json({ errors });
  }
};

//get post by id:
exports.postbyid = (req, res) => {
  Post.find({ _id: req.params.id })
    .populate("postedBy", "_id firstName lastName createdAt")
    .then((postbyid) => {
      res.json(postbyid);
    })
    .catch((err) => {
      console.log(err);
    });
};
