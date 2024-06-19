const express = require('express');
const router = express.Router();
const { user_view_get, user_add_get, user_add_post, user_edit_get, user_edit_post, user_delete } = require("../controllers/userController.js")
// PATH '/user'

/**
* @route /user/:id
* @method GET
* @access public
*/
router.get("/:id", user_view_get);

/**
* @route /user/add
* @method GET
* @access public
*/
router.get("/add", user_add_get);

/**
* @route /user/add
* @method POST
* @access public
*/
router.post("/add", user_add_post);

/**
* @route /user/edit/:id
* @method GET
* @access public
*/
router.get("/edit/:id", user_edit_get);

/**
* @route /user/edit/:id
* @method POST
* @access public
*/
router.post("/edit/:id", user_edit_post);

/**
* @route /user/delete/:id
* @method DELETE
* @access public
*/
router.delete("/delete/:id", user_delete);

module.exports = router;