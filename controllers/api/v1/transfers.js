//const Coinz = require('../../../models/Coinz');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coinzSchema = new Schema({
<<<<<<< HEAD
    user: String,
    coinz: Number,
    reason: String, 
    message: String, 
    completed: Boolean
});

=======
   user: String,
   coinz: Number,
   reason: String,
   message: String,
   completed: Boolean
})
>>>>>>> 78c4436906d37acd6a142c94e7bdffdb49c9a353

const Coinz = mongoose.model('Coinz', coinzSchema);

//forgotten
const getAll = (req, res)=>{
    Todo.find({
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
<<<<<<< HEAD
    coin.reason=req.body.reason;
    coin.message=req.body.message;
    coin.completed=req.body.completed;
=======
    coin.completed=req.body.completed;
    coin.message = req.body.message;

>>>>>>> 78c4436906d37acd6a142c94e7bdffdb49c9a353
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

  module.exports.getAll = getAll;
  module.exports.create = create;
  module.exports.upload = upload;
  module.exports.status = status;