const router = require('express').Router();
const { signup }=require('../controller/user');

router.post('/signup',signup);

router.post('/signin',(req,res)=>{
 
});




module.exports=router;