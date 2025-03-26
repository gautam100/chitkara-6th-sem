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
  } //function
} // class end

module.exports = categoryModel;
