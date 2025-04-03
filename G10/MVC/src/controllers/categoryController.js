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
    let insertResult = await categoryModel.createCategory(req);
    console.log(insertResult);
    if (insertResult) {
      return resp
        .status(200)
        .json({ msg: "One record inserted successfully!" });
    } else {
      return resp.status(400).json({ msg: `Error in SQL:- ${err}` });
    }
  } catch (error) {
    throw error;
  }
};

// PUT
const modifyCategory = async (req, resp) => {
  try {
    let insertResult = await categoryModel.editCategory(req);
    if (!insertResult) {
      return resp.status(500).json({ msg: "Server Error!" });
    } else {
      return resp.status(200).json({ msg: "Record updated successfully!" });
    }
  } catch (error) {
    throw error;
  }
};

// Delete
const deleteCategory = async (req, resp) => {
  try {
    let id = req.params.id;
    if (!id) {
      return resp.status(404).json({ message: "please enter id" });
    } else {
      let rem = await categoryModel.removeCategory(id);
      if (rem) {
        return resp
          .status(200)
          .json({ msg: "One record deleted successfully!" });
      } else {
        return resp.status(400).json({ msg: `Error in SQL:- ${err}` });
      }
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getCategoryList,
  saveCategory,
  modifyCategory,
  deleteCategory,
};
