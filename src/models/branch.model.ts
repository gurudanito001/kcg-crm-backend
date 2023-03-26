import { DataTypes } from 'sequelize'
import sequelize from "../dbConnection";




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
    validate: {
      notEmpty:{ msg: "companyId is required"},
    }
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty:{ msg: "state is required"},
    }
  },
  lga: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty:{ msg: "lga is required"},
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty:{ msg: "name is required"},
    }
  },
  code: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      notEmpty:{ msg: "code is required"},
    }
  },
  isHeadOffice: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty:{ msg: "address is required"},
    }
  },
  extraData: {
    type: DataTypes.JSONB,
  }
});
Branch.sync().then(() => console.log("Branch was successfully synced"));

export default Branch;

