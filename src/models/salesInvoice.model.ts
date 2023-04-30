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
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    employeeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    invoiceRequestId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    pdfUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "PDF URL is required"}
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

