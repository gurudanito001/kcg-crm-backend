import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class InvoiceRequestForm extends Model { }

  InvoiceRequestForm.init({
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
    customerType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    pfiRequestFormId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    invoiceName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address2: {
      type: DataTypes.STRING,
    },
    contactPerson: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactOfficeTelephone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    salesThru: {
      type: DataTypes.STRING,
    },
    industry: {
      type: DataTypes.STRING,
    },
    businessType: {
      type: DataTypes.STRING,
    },
    kycId: {
      type: DataTypes.STRING,
    },
    vehiclesData: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: []
    },
    expectedDeliveryDate: {
      type: DataTypes.STRING,
    },
    deliveryLocation: {
      type: DataTypes.STRING,
    },
    deliveryBy: {
      type: DataTypes.STRING,
    },
    paymentStatus: {
      type: DataTypes.STRING,
    },
    lpoNumber: {
      type: DataTypes.STRING,
    },
    lpoPdf: {
      type: DataTypes.STRING,
    },
    agreedCreditPeriod: {
      type: DataTypes.STRING,
    },
    rebateReceiver: {
      type: DataTypes.STRING,
    },
    relationshipWithTransaction: {
      type: DataTypes.STRING,
    },
    accountDetailsToTransfer: {
      type: DataTypes.STRING,
    },
    refundToCustomer: {
      type: DataTypes.STRING,
    },
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    warrantyCertificate: {
      type: DataTypes.STRING
    },
    approvedByGM: {
      type: DataTypes.JSON,
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
    modelName: 'InvoiceRequestForm',
  });

  InvoiceRequestForm.sync({force: true}).then(()=>console.log("InvoiceRequestForm was successfully synced"));

