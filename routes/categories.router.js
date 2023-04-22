const router = require("express").Router();
const { faker } = require("@faker-js/faker");

router.get("/",(req,res)=>{

  const categories = [];
  for (let index = 0; index < 5; index++) {
    categories.push({
        name: "bla"
    });

  }
  res.json(categories);
});



module.exports = router;
