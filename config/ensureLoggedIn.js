module.exports = function (req,res,next){
    if(!req.user) return res.status(401).json("Unauthorized");
    console.log("ensured Logged In")
    next();
};