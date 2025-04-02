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
    let saveResult = categoryModel.categorySave(req);
    if (!saveResult) {
      return resp.status(401).json({
        success: false,
        message: "Error! Data could not save.",
      });
    } else {
      return resp.status(200).json({
        success: true,
        message: "Data saved successfully!",
      });
    }
  } catch (error) {
    throw error;
  }
};

// PUT
const modifyCategory = async (req, res) => {
  try {
    const categoryData = req.body;
    if (!categoryData.id) {
      return res
        .status(400)
        .json({ message: "Category ID and data are required" });
    }
    //const categoryId = categoryData.id;
    const updatedCategory = await categoryModel.categoryModify(req);
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res
      .status(200)
      .json({
        message: "Category updated successfully",
        data: updatedCategory,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

//DELETE
const removeCategory = async (req, resp) => {
    try{
        let categoryId = req.params.id;
        console.log(categoryId);
        if(!categoryId){
            return resp.status(401).json({
                success: false,
                message: "Error! Id is missing.",
              }); 
        }else{
            let delResult = categoryModel.categoryDelete(categoryId);
            if(!delResult){
                return resp.status(200).json({
                    success: false,
                    message: "Error in delete operation",
                  });
            }else{
                return resp.status(404).json({
                    success: true,
                    message: "Deleted Successfully",
                  });
            }
        }
    }catch(error){
        throw error;
    }
};

module.exports = {
  getCategoryList,
  saveCategory,
  modifyCategory,
  removeCategory,
};
