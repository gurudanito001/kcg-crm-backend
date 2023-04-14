import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class VehicleDelivery extends Model { }

  VehicleDelivery.init({
    // Model attributes are defined here
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    invoiceRequestFormId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    employeeId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    customerName: {
      type: DataTypes.STRING,
    },
    customerAddress: {
      type: DataTypes.STRING,
    },
    invoiceNumber: {
      type: DataTypes.STRING,
    },
    deliveryNoteNumber: {
      type: DataTypes.STRING,
    },
    chasisNumbers: {
      type: DataTypes.STRING,
    },
    bodyBuilding: {
      type: DataTypes.STRING,
    },
    totalOrderQuantity: {
      type: DataTypes.STRING,
    },
    quantityDelivered: {
      type: DataTypes.STRING,
    },
    quantityPending: {
      type: DataTypes.STRING,
    },
    nameOfDriver: {
      type: DataTypes.STRING,
    },
    vehicleRecipientName: {
      type: DataTypes.STRING,
    },
    vehicleRecipientPhone: {
      type: DataTypes.STRING,
    },
    receiverRelationshipWithBuyer: {
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
    modelName: 'VehicleDelivery',
  });

  VehicleDelivery.sync({force:true}).then(()=>console.log("VehicleDelivery was successfully synced"));

