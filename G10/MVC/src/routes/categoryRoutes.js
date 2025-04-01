const express = require("express");
const router = express.Router();

const { getCategoryList, saveCategory} = require("../controllers/categoryController");
router.get("/categoryList", getCategoryList);
router.post("/categorySave",saveCategory);

module.exports = router;
