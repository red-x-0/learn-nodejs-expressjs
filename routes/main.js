const express = require('express');
const router = express.Router();
const { main_index_get, user_index_post} = require("../controllers/mainController.js")
// PATH '/'

router.get("/", main_index_get);

module.exports = router;