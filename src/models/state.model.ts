import { DataTypes } from 'sequelize'
import sequelize from "../dbConnection";



const State = sequelize.define('State', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  companyId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    unique: true
  },
  extraData: {
    type: DataTypes.JSONB,
  }
});
State.sync().then(() => console.log("State was successfully synced"));

export default State;

