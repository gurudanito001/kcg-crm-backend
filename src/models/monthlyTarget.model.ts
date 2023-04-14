import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from "../dbConnection";

var MonthlyTarget = sequelize.define('MonthlyTarget', {
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
  monthlyTarget: {
    type: DataTypes.JSONB,
  },
  planForMonth: {
    type: DataTypes.TEXT
  },
  extraData: {
    type: DataTypes.JSONB,
  }
});

MonthlyTarget.sync().then(() => console.log("MonthlyTarget was successfully synced"));
export default MonthlyTarget

