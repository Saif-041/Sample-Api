var express = require('express');
var router = express.Router();
var User = require('../../models/data.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //let users = await User.find();

  // res.send([{ "id": 0, "name": "Cross" },
  // { "id": 1, "name": "Hair" },
  // { "id": 2, "name": "Technologies" }]);
  
  res.send(User.users);
});

module.exports = router;