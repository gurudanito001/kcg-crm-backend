import { DataTypes } from 'sequelize'
import sequelize from "../dbConnection";



const LGA = sequelize.define('Lga', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { 
      notEmpty: { msg: "name is required" }
    }
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { 
      notEmpty: { msg: "state is required" }
    }
  },
  code: {
    type: DataTypes.STRING,
    unique: true
  },
  extraData: {
    type: DataTypes.JSONB,
  }
});
LGA.sync().then(() => console.log("LGA was successfully synced"));

export default LGA;

