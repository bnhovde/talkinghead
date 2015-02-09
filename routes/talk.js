var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/talk', function(req,res){
  console.log(req.body);
});

module.exports = router;
