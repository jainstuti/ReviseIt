const jwt=require("jsonwebtoken"); 

var secret="mysecrettoken";

// module.exports= function(req, res, next){
//     const token=req.header("x-auth-token");

//     if(!token){
//         return res.status(401).json({msg: "No token, autherisation denied"});
//     }

//     try{
//         const decoded = jwt.verify(token, jwtSecret);
//         req.user=decoded.user;
//         next();
//     }
//     catch(err){
//         res.status(401).json({msg: "Token is invalid "})
//     }
// }

const auth = async (req, res, next) => {
    try {
      // const token = req.headers["x-auth-token"]
      // console.log("*************");
      // console.log(req.headers);
      const token = req.headers.authorization.split(" ")[1];
    //   const isCustomAuth = token.length < 500;
  
      let decodedData;
  
      if (token) {      
        decodedData = jwt.verify(token, secret);
  
        req.userId = decodedData?.id;
        console.log(req.userId);
      }   
  
      next();
    } catch (error) {
      console.log(error);
    }
  }

  module.exports = auth;
//   export default auth;
  