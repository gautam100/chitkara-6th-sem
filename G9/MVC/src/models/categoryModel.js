const connection = require("../config/connection");

class categoryModel {

  static categoryList() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT cate_name, cate_desc, is_enable, created_on FROM master_category",
        (error, rows) => {
            if(error){
                reject(error);
            }else{
                resolve(rows);
            }
        }
      );
    });
  }//categoryList ends

  static categorySave(req){
    return new Promise((resolve, reject) => {
      console.log(req.cate_name);
      console.log(req.cate_desc);
      connection.query(
        "INSERT INTO master_category (cate_name, cate_desc) VALUES (?, ?)",
        [req.cate_name, req.cate_desc],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  }//categorySave ends

  static categoryModify(req){
    
  }//categoryModify ends

  static categoryDelete(){

  }//categoryDelete ends

}//class ends

module.exports = categoryModel;
