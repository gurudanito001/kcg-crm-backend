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
    productBrand: {
      type: DataTypes.STRING,
    },
    vehicleModel: {
      type: DataTypes.STRING,
    },
    bodyTypeDescription: {
      type: DataTypes.STRING,
    },
    vehicleServiceDetails: {
      type: DataTypes.STRING,
    },
    vehicleSpecialFitmentDetails: {
      type: DataTypes.STRING,
    },
    costOfBodySpecialFitment: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.STRING,
    },
    priceOfVehicle: {
      type: DataTypes.STRING,
    },
    discount: {
      type: DataTypes.STRING,
    },
    vatDeduction: {
      type: DataTypes.BOOLEAN,
    },
    whtDeduction: {
      type: DataTypes.BOOLEAN,
    },
    refundRebaseAmount: {
      type: DataTypes.STRING,
    },
    refundRebaseRecipient: {
      type: DataTypes.STRING,
    },
    registration: {
      type: DataTypes.BOOLEAN,
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
    additionalInformation: {
      type: DataTypes.STRING,
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'PfiRequestForm',
  });

  PfiRequestForm.sync({force: true}).then(()=>console.log("PfiRequestForm was successfully synced"));

