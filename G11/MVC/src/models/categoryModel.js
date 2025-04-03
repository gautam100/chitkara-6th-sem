const connection = require("../config/connection");


class categoryModel{
    static getCategoryList(){
        return new Promise((resolve,reject)=> {
            connection.query(`SELECT id,cate_name, cate_desc, is_enable, created_on,created_by FROM master_category`,(err,res)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(res);
                }
            })
        })
    }
}

module.exports = categoryModel;