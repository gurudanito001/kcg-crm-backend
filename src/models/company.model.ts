import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";
import Branch from './branch.model';
import Employee from './employee.model';
import ProductGroup from './productGroup.model';

var Company = sequelize.define('Company', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      validate: {
      }
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Email must be a valid email"}
      }
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  });

// Company.hasMany(Branch);
//Company.hasMany(ProductGroup);
//Company.hasMany(Employee);


Company.sync().then(()=>console.log("Company was successfully synced"));
export default  Company

