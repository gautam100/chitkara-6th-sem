const connection = require("../config/connection");

class categoryModel {

  static categoryList() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM master_category", (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });
  } // categoryList

  static createCategory(req) {
    return new Promise((resolve, reject) => {
      let body = req.body;
      console.log("In Model");
      console.log(body);
      if (!body.cate_name) {
        //return resp.status(400).json({ msg: "Mandatory field is missing!" });
        reject();
      } else {
        connection.query(
          `INSERT INTO master_category (cat_name, cat_desc, created_on, created_by) VALUES ('${body.cate_name}','${body.cate_desc}',CURRENT_TIMESTAMP(),'${body.created_by}')`,
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
  } // createCategory

} // class end

module.exports = categoryModel;
