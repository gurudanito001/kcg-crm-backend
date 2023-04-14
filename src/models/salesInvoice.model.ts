import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";

var SalesInvoice = sequelize.define('SalesInvoice', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Invoice Name is required"}
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Invoice URL is required"}
      }
    },
    description: {
      type: DataTypes.STRING,
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  });

  SalesInvoice.sync().then(()=>console.log("SalesInvoice was successfully synced"));
export default  SalesInvoice

