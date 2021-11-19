const express = require('express');
const { createpost } = require('../controller/post');
const { requireLogin } = require('../validators/requireLogin');
const router = express.Router();


router.post('/createpost',requireLogin,createpost);



// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;