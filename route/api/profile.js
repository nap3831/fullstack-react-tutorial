const express = require('express');
const router = express.Router();
/*
@route GET / api/profile/test
@desc GET / test profile route
@access public --*/
router.get('/test', (req, res) => res.json());
module.exports = router;