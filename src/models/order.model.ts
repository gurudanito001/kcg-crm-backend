import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";

var Order = sequelize.define('Order', {
  // Model attributes are defined here
  id: {
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
  pfiRequestForms: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    defaultValue: null
  }
});

Order.sync().then(() => console.log("Order was successfully synced"));
export default Order

