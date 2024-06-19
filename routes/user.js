const express = require('express');
const router = express.Router();
const { user_view_get, user_add_get, user_add_post, user_edit_get, user_edit_post, user_delete } = require("../controllers/userController.js")
// PATH '/user'

router.get("/:id", user_view_get);

router.get("/add", user_add_get);

router.post("/add", user_add_post);

router.get("/edit/:id", user_edit_get);

router.post("/edit/:id", user_edit_post);

router.delete("/delete/:id", user_delete);

module.exports = router;