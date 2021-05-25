const Coinz = require('../../../models/Coinz');

const getAll = (req, res)=>{
    Coinz.find({
        "user": req.user._id
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

const create = (req, res, next) => {
    let coin= new Coinz();
    coin.text=req.body.text;
    coin.user=req.body.user;
    coin.reason = req.body.reason;
    coin.message= req.body.message;
    coin.coinz=req.body.coinz;
    coin.completed=false;
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
    }).then(doc => {
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

  module.exports.getAll = getAll;
  module.exports.create = create;
  module.exports.upload = upload;
  module.exports.status = status;
  module.exports.update = update;