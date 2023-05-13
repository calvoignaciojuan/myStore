const express = require("express");
const routerApi = require("./routes/index");
const {logErrors,boomErrorHandler,errorHandler} = require("./middlewares/error.handler");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); //para que me puedan llegar objetos json por POST, sino no req.body no devuelve nada

app.use(cors());

routerApi(app);

app.use("/",(req,res)=>{
  res.send("HOLA");
});

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT,()=>{
  console.log(`server listening in http://localhost:${PORT}`);
});


