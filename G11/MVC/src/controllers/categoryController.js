const categoryModel = require("../models/categoryModel");

// GET API
let getCategoryList = async(req,resp) => {
    try{
        let categoryList = await categoryModel.getCategoryList();
        if(!categoryList){
            resp.status(400).json({ msg: "Error in SQL" });
        }else{
            resp.status(200).json({ msg: categoryList });
        }
    }catch(error){
        throw error;
    }
};

//POST
 let saveCategory = async(req,resp)=>{
//     try{

//     }catch(error){
//         throw error;
//     }
 };

exports.module = {
    getCategoryList,
    saveCategory
}

