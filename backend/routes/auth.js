const express = require("express");
const {
  signup,
  signin,
  searchUser,
  updateUser,
  deleteUser,
  getuserbyid,
} = require("../controller/auth");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../validators/auth");
const { requireLogin } = require("../validators/requireLogin");
const router = express.Router();

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);
router.post("/search", searchUser);
router.post("/updateUser/:id", requireLogin, updateUser);
router.delete("/deleteUser/:id", requireLogin, deleteUser);
router.get("/user/:id", getuserbyid);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;
