import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class Payment extends Model { }

  Payment.init({
    // Model attributes are defined here
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    invoiceNumber: {
      type: DataTypes.STRING,
    },
    invoiceDate: {
      type: DataTypes.STRING,
    },
    deliveryDate: {
      type: DataTypes.STRING,
    },
    nameOfCustomer: {
      type: DataTypes.STRING,
    },
    customerAddress: {
      type: DataTypes.STRING,
    },
    modelOfVehiclePurchased: {
      type: DataTypes.STRING,
    },
    quantityPurchased: {
      type: DataTypes.STRING,
    },
    advancePaymentReceived: {
      type: DataTypes.STRING,
    },
    outstandingAmount: {
      type: DataTypes.STRING,
    },
    vatDeducted: {
      type: DataTypes.STRING,
    },
    whtDeducted: {
      type: DataTypes.STRING,
    },
    vatPaymentReceipt: {
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
    modelName: 'Payment',
  });

  Payment.sync().then(()=>console.log("Payment was successfully synced"));

