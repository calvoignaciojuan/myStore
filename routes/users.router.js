const router = require("express").Router();
const usersService = require("./../services/user.service");
const service = new usersService();

router.get("/",(req,res)=>{

  res.json(service.find());
});

router.get("/:id",(req,res)=>{

  const {id} = req.params;
  res.status(200).json(service.findOne(id));
});


router.post("/",(req,res)=>{

  res.status(201).json({
    message:"user created",
    body: service.create(req.body)
  });

});



module.exports = router;
