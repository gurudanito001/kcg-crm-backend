import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";

var Company = sequelize.define('Company', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "group is required"}
      }
    },
    code: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: { msg: "code is required"}
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: "name is required"}
      }
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "logo is required"}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty:{ msg: "email is required"},
        isEmail: { msg: "email must be a valid email"}
      }
    },
    brands: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
      validate: {
        notEmpty:{ msg: "List of brands is required"},
      }
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  });

Company.sync().then(()=>console.log("Company was successfully synced"));
export default  Company

