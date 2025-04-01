const categoryModel = require("../models/categoryModel");

const getCategoryList = async (req,resp)=>{
    try {
        let categoryData = await categoryModel.categoryList();
        // console.log(categoryData);
        if(!categoryData){
            return resp.status(401).json({
                success:false,
                message: "Data doesn't exist in table"
            })
        }else{
            return resp.status(200).json({
                success: true,
                message: categoryData
            })
        }
      } catch (error) {
        throw error;
      }
}

module.exports = {
    getCategoryList
}