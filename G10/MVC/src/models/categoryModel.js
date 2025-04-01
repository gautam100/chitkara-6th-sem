const connection = require("../config/connection");

class categoryModel {
  static categoryList() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM master_category", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  } //getCategoryList Ends

  static categorySave(req) {
    return new Promise((resolve, reject) => {
      let body = req.body;
      if (!body.cate_name) {
        reject("Mandatory Field is missing!");
      } else {
        connection.query(
          `INSERT INTO master_category (cate_name, cate_desc, is_enable, created_on, created_by) VALUES ('${body.cate_name}','${body.cate_desc}','true',CURRENT_TIMESTAMP(),'1')`,
          (err, row) => {
            if (err) {
              reject(err);
            } else {
              resolve(row);
            }
          }
        );
      }
    });
  } //categorySave Ends
} //class ends

module.exports = categoryModel;
