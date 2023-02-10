module.exports = function (req,res,next){
    console.log("ensured Logged In")
    console.log(req.user);
    
    if(!req.user) return res.status(401).json("Unauthorized");
    next();
};