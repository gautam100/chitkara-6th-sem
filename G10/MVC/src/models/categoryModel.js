const connection = require("../config/connection");

class categoryModel{
    static categoryList(){
        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM master_category",(err,result)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(result)
                }
            })
        });
    } //getCategoryList Ends

}//class ends

module.exports = categoryModel;
