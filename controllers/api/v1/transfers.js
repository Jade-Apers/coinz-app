const Coinz = require('../../../models/Coinz');

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
    coin.text=req.body.text;
    coin.user=req.body.lastname;
    coin.user=req.body.firstname;
    coin.coinz=req.body.coinz;
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