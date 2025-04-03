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
  } // categoryList end

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
  } // createCategoryend

  static editCategory(req) {
    return new Promise((resolve, reject) => {
      let body = req.body;
      if (!body.id) {
        reject("Error! Id is missing.");
      } else {
        connection.query(
          `UPDATE master_category SET cate_name = '${body.cate_name}', cate_desc = '${body.cate_desc}', is_enable = 'true', created_on = current_timestamp(), created_by = '${body.created_by}' WHERE id = '${body.id}'`,
          (err, res) => {
            if (err) {
              reject("Error! Update Failed.");
            } else {
              resolve("Record Successfully Updated.");
            }
          }
        );
      }
    });
  } //modifyCategory end

  static removeCategory(id) {
    return new Promise((resolve, reject) => {
      if (!id) {
        reject("Error! Id is missing.");
      } else {
        connection.query(
          `DELETE FROM master_category WHERE id = '${id}'`,
          (err, res) => {
            if (err) {
              reject("Error! delete Failed.");
            } else {
              resolve("Record deleted successfully");
            }
          }
        );
      }
    });
  } // removeCategory ends
} // class end

module.exports = categoryModel;
