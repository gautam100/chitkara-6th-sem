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

  static categoryModify(req){
    return new Promise((resolve, reject) => {
      let body = req.body;
      if (!body.cate_name) {
        reject("Mandatory Field is missing!");
      } else {
        connection.query(
          `UPDATE master_category SET cate_name = ? , cate_desc = ? , created_by = ? WHERE id = ? `,
        [body.cate_name,body.cate_desc,body.created_by,body.id],
          (err, row) => {
            if (err) {
              reject(err);
            } else {
              resolve(row);
            }
          }
        );
        }
    })
  } //categoryModify Ends

  static categoryDelete(id){
    return new Promise((resolve,reject)=>{
      if(!id){
        reject("Error! ID is missing!")
      }else{
        connection.query("DELETE FROM master_category WHERE id = "+id,(err,res)=>{
          if(err){
            reject(err);
          }else{
            resolve(res);
          }
        })
      }
    });
  }//categoryDelete Ends

} //class ends

module.exports = categoryModel;
