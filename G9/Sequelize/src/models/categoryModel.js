const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Category = sequelize.define(
  "Category",
  {
    // Model attributes are defined here
    cate_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cate_desc: {
      type: DataTypes.TEXT,
      // allowNull defaults to true
    },
    is_enable: {
      type: DataTypes.ENUM("true", "false"),
      defaultValue: "true",
    },
    created_by:{
      type: DataTypes.INTEGER
    }
  },
  {
    // Other model options go here
    tableName: 'master_category'
  }
);

module.exports = Category;



