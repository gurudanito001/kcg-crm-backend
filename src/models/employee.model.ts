import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";
import Interfaces from 'src/interfaces';
import Customer from './customer.model';
import CustomerVisit from './customerVisit.model';

 

  export default class Employee extends Model {}

  Employee.init({
    // Model attributes are defined here
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    companyId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    staffCadre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    branchId: {
      type: DataTypes.UUID,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Email must be a valid email"}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    supervisor: {
      type: DataTypes.STRING,
    },
    productHead: {
      type: DataTypes.STRING,
    },
    locationManager: {
      type: DataTypes.STRING,
    },
    subordinate: {
      type: DataTypes.STRING,
    },
    employmentDate: {
      type: DataTypes.STRING,
    },
    brandsAssigned: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'Employee',
  });

  //Employee.belongsToMany(Customer, {through: CustomerVisit})

  Employee.sync().then(()=>console.log("Employee was successfully synced"));

