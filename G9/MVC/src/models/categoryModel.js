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
  }//categoryList

}//class ends

module.exports = categoryModel;
