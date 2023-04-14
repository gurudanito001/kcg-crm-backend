import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class Customer extends Model { }

  Customer.init({
    // Model attributes are defined here
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    employeeId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "employeeId is required"},
      }
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "companyName is required"},
      }
    },
    state: {
      type: DataTypes.STRING,
    },
    lga: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "address is required"},
      }
    },
    address2: {
      type: DataTypes.STRING,
    },
    companyWebsite: {
      type: DataTypes.STRING,
    },
    chairman: {
      type: DataTypes.STRING,
    },
    mdCeoName: {
      type: DataTypes.STRING,
    },
    industry: {
      type: DataTypes.STRING,
    },
    businessType: {
      type: DataTypes.STRING,
    },
    customerType: {
      type: DataTypes.STRING,
    },
    enquirySource: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "cold"
    },
    approved:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });

  Customer.sync().then(()=>console.log("Customer was successfully synced"));

