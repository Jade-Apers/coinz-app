const Coinz = require('../../../models/Coinz');

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
    coin.text=req.body.text;
    console.log(req.body.text);
    coin.user=req.body.user;
    coin.coinz=req.body.coinz;
    coin.completed= req.body.completed;
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

const update = (req, res) => {
    let user = req.user._id;
    let todoId = req.params.id;
    Todo.findOneAndUpdate({
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
                todo: doc
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