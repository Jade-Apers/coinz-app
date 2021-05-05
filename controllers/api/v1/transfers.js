const getAll = (req, res)=>{
    res.json({
        status: "succes", 
        data:{
            transfer:{
                message: "received coins"
            }
        }
    });
  }

const create = (req, res) => {
    res.json({
        status: "succes", 
        data:{
            transfer: []}      
    });
}

const upload = (req, res) => {
    res.json({
        status: "succes", 
        data: {
            message:"GET transfers" + req.query.user
        }
    });
}

const status = (req, res) => {
    res.json({
        status: "succes", 
        data: {
            message: "GET leaders" + req.params.id
        }
    });
}

  module.exports.getAll = getAll;
  module.exports.create = create;
  module.exports.upload = upload;
  module.exports.status = status;