const User = require('../models/User');
const jwt= require('jsonwebtoken');
const config = require('config');

const signup = async (req, res)=>{
    console.log(req.body);
   
    let username = req.body.username; 
    let email= req.body.email;
    let password = req.body.password;
    let coinz= 50;

    const user = new User({
        username: username,
        email:email,
        coinz:coinz
    });

    await user.setPassword(password);
    await user.save().then(result =>{

        let token= jwt.sign({
            uid: result._id,
            username: result.username
        }, process.env.jwt_secret || config.get("jwt.secret"));

        res.json({
            "status": "success",
            "data": {
                "token": token
            }
        })

    }).catch(error =>{
        res.json({
            "status":"error",
            "message": error
        })
        console.log(error);
    });
};

const login= async(req, res, next) =>{
    console.log(req.body);

    const user = await User.authenticate()(req.body.username, req.body.password).then(result =>{

        if(!result.user){
            return res.json({
                "status":"error",
                "message":"login failed"
            })
        }

        let token = jwt.sign({
            uid: result.user._id,
            username: result.user.username
        }, process.env.jwt_secret || config.get("jwt.secret"));


        return res.json({
            "status": "success",
            "data": {
               "token": token 
            }
        });

     }).catch(error=>{
            res.json({
                "status": "error",
                "message": error
            })
        });
    };

module.exports.signup = signup;
module.exports.login = login;