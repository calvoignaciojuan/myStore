//al tener error primero significa que es un middleware de tipo error
function logErrors( err, req, res ,next){
  console.error(err);
  next(err);
}

function boomErrorHandler(err, req, res, next){
  if(err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }else{
    next(err);
  }
}

//por mas que no uso el next, debo ponerlo
function errorHandler(err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler
}