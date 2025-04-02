const categoryModel = require("../models/categoryModel");

// GET
const getCategoryList = async (req, resp) => {
  try {
    let categoryData = await categoryModel.categoryList();
    // console.log(categoryData);
    if (!categoryData) {
      return resp.status(401).json({
        success: false,
        message: "Data doesn't exist in table",
      });
    } else {
      return resp.status(200).json({
        success: true,
        message: categoryData,
      });
    }
  } catch (error) {
    throw error;
  }
};

// POST
const saveCategory = async (req, resp) => {
  try {
    const body = req.body;

    if (!body.cate_name || !body.cate_desc) {
      return resp.status(400).json({
        success: false,
        message: "Category name and description are required",
      });
    } else {
      let newCategory = await categoryModel.categorySave(body);

      if (!newCategory) {
        return resp.status(500).json({
          success: false,
          message: "Error while saving category",
        });
      }else{
        return resp.status(201).json({
          success: true,
          message: "Category created successfully",
          data: newCategory,
        });
      }
    }
  } catch (error) {
    throw error;
  }
};

// PUT
const modifyCategory = async (req, resp) => {
  try {
    const categoryData = req.body;
    if (!categoryData.id) {
      return resp
        .status(400)
        .json({ message: "Category ID is required" });
    }
    //const categoryId = categoryData.id;
    const updatedCategory = await categoryModel.categoryModify(req);
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return resp
      .status(200)
      .json({
        message: "Category updated successfully",
        data: updatedCategory,
      });
  } catch (error) {
    return resp
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// DELETE
const deleteCategory = async (req, resp) => {};

module.exports = {
  getCategoryList,
  saveCategory,
  modifyCategory,
  deleteCategory,
};
