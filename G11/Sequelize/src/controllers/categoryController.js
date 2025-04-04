const categoryModel = require("../models/categoryModel");

categoryModel.sync(); // This creates the table if it doesn't exist & does nothing if it already exists
//categoryModel.sync({ force: true }); // This creates the table, dropping it first if it already exists
//categoryModel.sync({ alter: true }); // This performs the necessary changes in the table to make it match the model.

// GET
const getCategoryList = async (req, resp) => {
  try {
    const categoryData = await categoryModel.findAll({});
    if (categoryData.length > 0) {
      resp.status(200).json({ success: true, message: categoryData });
    } else {
      resp
        .status(200)
        .json({ success: false, message: "Data doesn't exist in table" });
    }
  } catch (error) {
    resp.status(500).json({ message: error });
  }
};

// GET
const getCategory = async (req, resp) => {
  try {
    /*const category = await categoryModel.findOne({
      where: {
        id: req.params.id
      }
    });*/
    const category = await categoryModel.findByPk(req.params.id);
    if (category === null) {
      resp.status(404).json({ success: false, message: "Id Does not exist!" });
    } else {
      resp.status(200).json({ success: true, message: category });
    }
  } catch (error) {
    resp.status(500).json({ message: error });
  }
};

// POST
const saveCategory = async(req,resp) =>{
  try{
    let body = req.body;
    let insertResult;
    if(body.length>1){
      // Insert Multiple Records
      insertResult = await categoryModel.bulkCreate(body);
    }else{
      // Insert Single Record 
      insertResult = await categoryModel.create(body);
    }
    console.log(insertResult);
    if(insertResult){
      return resp
            .status(200)
            .json({ success: true, msg: "Record(s) inserted successfully!" });
    }else{
      return resp.status(500).json({ success: false, msg: `Error in SQL:- ${err}` });
    }
  }catch(error){
    throw error;
  }
};

// Patch
const modifyCategory = async(req,resp)=>{
  try{
    let body = req.body;
    const categoryData = await categoryModel.update(body,{
      where : {
        id:req.params.id
      }
    });
    if(!categoryData){
      return resp.status(404).json({success:false, msg: 'Id does not exist!'});
    }else{
      return resp.status(200).json({success:true, msg: 'Record Updated Successfully!'});
    }
  }catch(error){
    throw error;
  }
};

// Delete
const deleteCategory = async(req,resp)=>{
  try{
    const category = await categoryModel.destroy({
      where:{
        id: req.params.id
      }
    });
    if(!category){
      resp.status(400).json({success:true, msg: "Id not found!"})
    }else{
      resp.status(200).json({success:true, msg: "Record Deleted Successfully!"});
    }
    
  }catch(error){
    throw error;
  }
}

module.exports = {
  getCategoryList,
  getCategory,
  saveCategory,
  modifyCategory,
  deleteCategory
};
