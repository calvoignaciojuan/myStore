const express = require("express");
const routerApi = require("./routes/index");
const {logErrors,boomErrorHandler,errorHandler} = require("./middlewares/error.handler");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json()); //para que me puedan llegar objetos json por POST, sino no req.body no devuelve nada

app.use(cors());

app.use("/",(req,res)=>{
  res.send("HOLA");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
  console.log(`server listening in http://localhost:${port}`);
});


