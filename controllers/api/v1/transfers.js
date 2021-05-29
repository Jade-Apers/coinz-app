const Coinz = require('../../../models/Coinz');
const config = require('config');

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

//create a transaction
const create = (req, res) => {
    let coin= new Coinz();
    coin.sender= req.body.sender;
    coin.receiver= req.body.receiver;
    coin.coinz= req.body.coinz;
    coin.reason= req.body.reason;
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
            message:"GET transfers" + req.query.username
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
    let coinzId = req.params.id;
    Coinz.findOneAndUpdate({
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
    })
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
  module.exports.update = update;
  module.exports.getLeaderboard = getLeaderboard;
