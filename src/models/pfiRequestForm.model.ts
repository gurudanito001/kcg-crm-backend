import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class PfiRequestForm extends Model { }

  PfiRequestForm.init({
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
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    customerType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contactPerson: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING,
    },
    companyAddress: {
      type: DataTypes.STRING,
    },
    emailAddress: {
      type: DataTypes.STRING,
    },
    pfiVehiclesData: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: []
    },
    refundRebaseRecipient: {
      type: DataTypes.STRING,
    },
    designation: {
      type: DataTypes.STRING,
    },
    relationshipWithTransaction: {
      type: DataTypes.STRING,
    },
    estimatedOrderClosingTime: {
      type: DataTypes.STRING,
    },
    deliveryPeriod: {
      type: DataTypes.STRING,
    },
    paymentType: {
      type: DataTypes.STRING,
    },
    deliveryLocation: {
      type: DataTypes.STRING,
    },
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    additionalInformation: {
      type: DataTypes.TEXT,
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'PfiRequestForm',
  });

  PfiRequestForm.sync({force: true}).then(()=>console.log("PfiRequestForm was successfully synced"));

