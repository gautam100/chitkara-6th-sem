const express = require("express");
const router = express.Router();

const { getCategoryList, saveCategory, modifyCategory, removeCategory} = require("../controllers/categoryController");

router.get("/categoryList", getCategoryList);
router.post("/categorySave",saveCategory);
router.put("/categoryModify",modifyCategory);
router.delete("/categoryDelete/:id",removeCategory);

module.exports = router;
