const express = require('express');
const { createpost , allPost ,myPost ,deletePost , updatePost} = require('../controller/post');
const { requireLogin } = require('../validators/requireLogin');
const router = express.Router();


router.post('/createpost',requireLogin,createpost);
router.get('/allPost',allPost);
router.get('/myPost',requireLogin,myPost);
router.delete('/deletePost/:postId',requireLogin,deletePost);
router.post('/updatePost/:postId',requireLogin,updatePost);




// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;