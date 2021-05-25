//const Coinz = require('../../../models/Coinz');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coinzSchema = new Schema({
    user: String,
    coinz: Number,
    reason: String, 
    message: String, 
    completed: Boolean
});


const getAll = (req, res)=>{
    res.json({
        status: "success", 
        data:{
            transfers: []
        }
    });
  }

const create = (req, res, next) => {
    let coin= new Coinz();
    coin.user=req.body.user;
    coin.coinz=req.body.coinz;
    coin.reason=req.body.reason;
    coin.message=req.body.message;
    coin.completed=req.body.completed;
    coin.save((err, doc)=>{
        if(err){
            res.json({
                status: "error",
                message: "Could not save this item"
            })
        }
        if(!err){
            res.json({
                status:"success",
                data:{
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

  module.exports.getAll = getAll;
  module.exports.create = create;
  module.exports.upload = upload;
  module.exports.status = status;