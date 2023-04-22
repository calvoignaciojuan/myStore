const productsRouter = require("./products.router");
const usersRouter = require("./users.router");
const categoriesRouter = require("./categories.router");

const express = require("express");
const router = express.Router();

function routerApi(app){

  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  router.use("/categories", categoriesRouter);

  app.use("/api/v1",router);

}

module.exports = routerApi;
