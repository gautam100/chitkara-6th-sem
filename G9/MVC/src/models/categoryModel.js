const connection = require("../config/connection");

class categoryModel {
  static categoryList() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT cate_name, cate_desc, is_enable, created_on FROM master_category",
        (error, rows) => {
          if (error) {
            reject(error);
          } else {
            resolve(rows);
          }
        }
      );
    });
  } //categoryList ends

  static categorySave(req) {
    return new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO master_category (cate_name, cate_desc, created_on, created_by) VALUES ('${req.cate_name}', '${req.cate_desc}', current_timestamp(), '1')`,
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  } //categorySave ends

  static categoryModify(req) {
    return new Promise((resolve, reject) => {
      let body = req.body;
      if (!body.cate_name) {
        reject("Mandatory Field is missing!");
      } else {
        connection.query(
          `UPDATE master_category SET cate_name = '${body.cate_name}' , cate_desc = '${body.cate_desc}' , created_on = current_timestamp(), created_by = '1' WHERE id = ${body.id}`,
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
  } //categoryModify ends

  static categoryDelete() {} //categoryDelete ends
} //class ends

module.exports = categoryModel;
