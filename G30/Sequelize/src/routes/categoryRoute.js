const express = require("express");
const router = express.Router();

const {
  getCategoryList,
  getCategory,
  saveCategory,
  modifyCategory,
  deleteCategory
} = require("../controllers/categoryController");

router.get("/categoryList", getCategoryList);
router.get("/:id", getCategory);
router.post("/categorySave", saveCategory);
router.patch("/categoryModify/:id", modifyCategory);
router.delete("/:id", deleteCategory)

module.exports = router;
