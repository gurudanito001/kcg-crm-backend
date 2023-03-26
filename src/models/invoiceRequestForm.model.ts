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
    vehicleBrand: {
      type: DataTypes.STRING,
    },
    vehicleModel: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.STRING,
    },
    colour: {
      type: DataTypes.STRING,
    },
    totalInvoiceValuePerVehicle: {
      type: DataTypes.STRING,
    },
    typeOfBodyBuilding: {
      type: DataTypes.STRING,
    },
    bodyFabricatorName: {
      type: DataTypes.STRING,
    },
    expectedDeliveryDate: {
      type: DataTypes.STRING,
    },
    deliveryLocation: {
      type: DataTypes.STRING,
    },
    registration: {
      type: DataTypes.STRING,
    },
    delivery: {
      type: DataTypes.STRING,
    },
    vatDeduction: {
      type: DataTypes.BOOLEAN,
    },
    whtDeduction: {
      type: DataTypes.BOOLEAN,
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
    warrantyCertificate: {
      type: DataTypes.STRING,
    },
    agreedCreditPeriod: {
      type: DataTypes.STRING,
    },
    rebateReceiver: {
      type: DataTypes.STRING,
    },
    rebateAmount: {
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
    servicePackageDetails: {
      type: DataTypes.STRING,
    },
    approvedBy: {
      type: DataTypes.JSON,
    },
    additionalInformation: {
      type: DataTypes.STRING,
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'InvoiceRequestForm',
  });

  InvoiceRequestForm.sync().then(()=>console.log("InvoiceRequestForm was successfully synced"));

