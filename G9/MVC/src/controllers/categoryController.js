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
    // Extract category data from request body
    const body = req.body;
    //console.log(body.cate_name+""+body.cate_desc);

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

      // Save the category in the database
    }

    
  } catch (error) {
    console.error(error);
    return resp.status(500).json({
      success: false,
      message: "Server error while saving category",
    });
  }
};

// PUT
const modifyCategory = async (req, resp) => {
  
};

// DELETE
const deleteCategory = async (req, resp) => {};

module.exports = {
  getCategoryList,
  saveCategory,
  modifyCategory,
  deleteCategory,
};
