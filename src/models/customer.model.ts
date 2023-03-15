import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";
import ContactPerson from './contactPerson.model';
import CustomerVisit from './customerVisit.model';


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
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
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
    contactPersons: {
      type: DataTypes.ARRAY(DataTypes.JSON)
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });

  Customer.hasMany(ContactPerson);


  Customer.sync().then(()=>console.log("Customer was successfully synced"));

