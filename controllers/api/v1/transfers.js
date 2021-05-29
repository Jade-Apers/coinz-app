const Coinz = require('../../../models/Coinz');
const User = require('../../../models/User');

//forgotten
const getAll = (req, res)=>{
    Coinz.find({
        "user": "Joris"
    }, (err, docs) =>{
        if(!err){
            res.json({
                "status": "success", 
                "data":{
                    "transfers": docs
                }
            });
        }  
    });
}

const create = (req, res) => {
    let coin= new Coinz();
    coin.user=req.body.user;
    coin.coinz=req.body.coinz;
    coin.reason=req.body.reason;
    coin.completed=false;
    coin.message = req.body.message;

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
    })
}

const upload = (req, res) => {
    res.json({
        status: "success", 
        data: {
            message:"GET transfers" + req.query.user
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

const getLeaderboard = (req, res) => {
    Coinz.find((err, docs) => {
        if(err){
            res.json({
                "status":"error", 
                "message": "could not find leaders"
            })
        }
        if(!err){
            res.json({
                "status": "success", 
                "data": {
                    "coinz": docs
            }            
        }).sort({"coinz": -1});
        }
    });
}

  module.exports.getAll = getAll;
  module.exports.create = create;
  module.exports.upload = upload;
  module.exports.status = status;
  module.exports.getLeaderboard= getLeaderboard;