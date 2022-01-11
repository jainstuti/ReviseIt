const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { check, validationResult} = require('express-validator');
const User = require('../models/user.model');
// const auth=require('../middlewares/auth');

var secret="mysecrettoken";

// router.post("/",[
//         check("name", "Name is required").not().isEmpty(),
//         check("email", "Please enter a valid email").isEmail(),
//         check("password", "Password should be atleast 6 characters long").isLength({min: 6})
//     ],
//     async (req, res)=>{
//         const errors=validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors: errors.array()});
//         }
//         const {name, email, password}=req.body; 
//         try{
//             //if user already exists
//             let user=await User.findOne({email});
//             if(user){
//                 res.status(400).json({errors: [{msg: "user already exists"}]}); 
//             }
//             user = new User({
//                 name, 
//                 email, 
//                 password,
//             });

//             const salt=await bcrypt.genSalt(10);

//             user.password= await bcrypt.hash(password, salt);
//             await user.save();

//             const payload={
//                 user:{
//                     id: user.id
//                 }
//             };
//             jwt.sign(payload, jwtSecret, {expiresIn: 360000}, (err, token)=>{
//                 if(err) throw err;
//                 res.json({token}); 
//             });
//         } catch(err){
//             console.error(err.message );
//             res.status(500).send("Internal  Server error ")
//         }
//     }
// );

// router.get('/auth', auth, async (req, res) => {
//     try{
//         const user = await User.findById(req.user.id).select("-password");
//         res.json(user);
//     }
//     catch(err){
//         console.error(err.message );
//         res.status(500).send("Internal  Server error ")
//     }
// })

// router.post('/auth', [
//         check("email", "Please enter a valid email").isEmail(),
//         check("password", "Password is required").exists()
//     ],
//     async (req, res) =>{
//         const errors=validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors: errors.array()});
//         }
//         const {email, password}=req.body; 
//         try{
//             //if user already exists
//             let user=await User.findOne({email});
//             if(!user){
//                 return res.status(400)
//                 .json({errors: [{msg: "Invalid credentials "}]});
//             }

//             const isMatch = await bcrypt.compare(password, user.password );

//             if(!isMatch){
//                 return res.status(400)
//                 .json({errors: [{msg: "Invalid credentials "}]});
//             }

//             //paste
//             const payload={
//                 user:{
//                     id: user.id
//                 }
//             };
//             jwt.sign(payload, jwtSecret, {expiresIn: "5 days"}, (err, token)=>{
//                     if(err) throw err;
//                     res.json({token}); 
//                 });
//             } catch(err){
//                 console.error(err.message );
//                 res.status(500).send("Internal  Server error ")
//             }

//         }
// )

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const oldUser = await User.findOne({ email });
  
      if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
  
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
  
      res.status(200).json({ result: oldUser, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  })


  router.post("/register", async (req, res) => {
    const { email, password, name } = req.body;
  
    try {
      const oldUser = await User.findOne({ email });
  
      if (oldUser) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await User.create({ email, password: hashedPassword, name });
  
      const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
  
      res.status(201).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
  })

module.exports = router;
