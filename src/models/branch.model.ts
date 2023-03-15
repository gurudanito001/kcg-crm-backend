import { DataTypes } from 'sequelize'
import sequelize from "../dbConnection";
import Company from './company.model';




const Branch = sequelize.define('Branch', {
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
  stateId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  lgaId: {
    type: DataTypes.UUID,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    unique: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  extraData: {
    type: DataTypes.JSONB,
  }
});
Branch.sync({force: true}).then(() => console.log("Branch was successfully synced"));

export default Branch;

