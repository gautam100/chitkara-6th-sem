const express = require("express");
const router = express.Router();

const {
  getCategoryList,
  saveCategory,
} = require("../controllers/categoryController"); // importing categoryController.js

router.get("/categoryList", getCategoryList);
router.post("/categorySave",saveCategory);

module.exports = router;
