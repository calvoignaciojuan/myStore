const boom = require("@hapi/boom");

function validatorHandler(schema,type){

  return (req,res,next)=>{
    const data = req[type];
    const {error} = schema.validate(data,{convert: false,abortEarly:false });
    if(error){
      next(boom.badRequest(error));
    }else{
      next();
    }
  };
}

module.exports = validatorHandler;