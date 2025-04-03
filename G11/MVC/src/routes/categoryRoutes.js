const express = require("express");
const router = express.Router();

const { getCategoryList } = require("../controllers/categoryController"); // importing categoryController.js

router.get("/categoryList", getCategoryList);

module.exports = router;
