const express = require("express");
const {
  createpost,
  allPost,
  myPost,
  deletePost,
  updatePost,
  postbyid,
} = require("../controller/post");
const { requireLogin } = require("../validators/requireLogin");
const router = express.Router();

router.post("/createpost", requireLogin, createpost);
router.get("/allPost", allPost);
router.get("/myPost", requireLogin, myPost);
router.delete("/deletePost/:id", requireLogin, deletePost);
router.post("/updatePost/:id", requireLogin, updatePost);
router.get("/:id", postbyid);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;
