const Coinz = require('../../../models/Coinz');
const User = require('../../../models/User');


const getAll = (req, res)=>{
    /*console.log(getAll);
    Coinz.find({sender: sender}),*/
    
    Coinz.find({
        "user": "Jadeke"
    }, (err, docs) =>{
        if(!err){
            res.json({
                "status": "success", 
                "data":{
                    "transfers": docs
                }
            });
        }  

        else{
            res.json({
                "status": "error",
                "message": error
            })
        }
    });
}

//create a transaction
const create = (req, res) => {
    let coin= new Coinz();
    coin.sender= req.user.username;
    console.log(req.user.username);
    coin.receiver= req.body.receiver;
    coin.coinz= req.body.coinz;
    coin.reason= req.body.reason;
    coin.message = req.body.message;
    console.log(coin);

    coin.save((err, doc)=>{
        if(err){
            res.json({
                "status": "error",
                "message": "Could not save this item"
            })
        }
        if(!err){
            res.json({
                "status":"success",
                "data":{
                    "transfer": doc
                }
            });
        }
        console.log(doc);
        console.log(create);
    })
   
}

//ophalen van coinz
const upload = (req, res) => {
    res.json({
        status: "success", 
        data: {
            message:"GET transfers " + req.query.username
        }
    });
}

const status = (req, res) => {
    res.json({
        status: "success", 
        data: {
            message: "GET leaders" + req.params.id
        }
    });
}

const update = (req, res) => {
    let user = req.user._id;

    Coinz.findOne({
        user: user,
        _id: coinz
    }, {
        completed: true
    }, {
        new: true
    }).then(docs => {
        res.json({
            "status": "success",
            "data": {
                transfers: docs
            }
        })
    }).catch(err => {
        res.json(err);
    });
}
    
const getLeaderboard = (req, res) => {
    
    User.find((err, docs) => {
        if(err){
            res.json({
                "status":"error", 
                "message": "could not find leaders"
            })
        }
        if(!err){
            res.json({
                "status": "success", 
                data: {
                    "leaderboard": docs          
                }
            })
        }
    }).sort({"coinz": -1});
}

const getDetails = (req, res) => {
    let id = req.params.id;
   // let token = req.headers.authorization;
    Coinz.findOne(/*{_id:id},*/
        (err, docs) => {
        if(err){
            res.json({
                "status":"error", 
                "message": "could not find details"
            })
        }
        if(!err){
            res.json({
                "status": "success", 
                data: {
                    "coinz": docs  
                }        
            })
        }
    }).sort({"coinz": -1});
}

  module.exports.getAll = getAll;
  module.exports.create = create;
  module.exports.upload = upload;
  module.exports.status = status;
  module.exports.update = update;
  module.exports.getLeaderboard= getLeaderboard;
  module.exports.getDetails= getDetails;
