import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";

 

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
      allowNull: false,
      validate: {
        notEmpty:{ msg: "companyId is required"},
      }
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "companyName is required"},
      }
    },
    staffCadre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "staffCadre is required"},
      }
    },
    branchId: {
      type: DataTypes.UUID,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "firstName is required"},
      }
    },
    middleName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "lastName is required"},
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "email must be a valid email"},
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


  Employee.sync().then(()=>console.log("Employee was successfully synced"));

