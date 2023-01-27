const User = require('../../models/user');
const jwt = require('jsonwebtoken');

async function create(req,res){
    try{
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch(err){
        console.log(err.stack);
    }
};

function createJWT(user){
    return jwt.sign({ user }, process.env.SECRET, {expiresIn: '24h'})
};



async function login(req,res){
    try{
        const user = await User.findOne({ email: req.body.email });
        if(!user) throw new Error();

        const match = await bcrypt.compare(req.body.password, user.password);
        if(!match) throw new Error();
        
        const token = createJWT(user);
        console.log("token", token);
        
    } catch(err) {
        console.log(err.stack);
    }
}



module.exports = {
    create,
    login
};