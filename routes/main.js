const express = require('express');
const router = express.Router();
const {main_index_get} = require("../controllers/mainController.js")
// PATH '/'

router.get("/", main_index_get);

module.exports = router