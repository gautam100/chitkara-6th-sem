const express = require("express");
const router = express.Router();

const {
  getCategoryList,
  saveCategory,
  modifyCategory,
  deleteCategory
} = require("../controllers/categoryController");

router.get("/categoryList", getCategoryList);
router.post("/categorySave", saveCategory);
router.put("/categoryModify",modifyCategory);
router.delete("/categoryDelete/:id",deleteCategory);

module.exports = router;
