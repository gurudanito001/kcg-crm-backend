import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class ContactPerson extends Model { }

  ContactPerson.init({
    // Model attributes are defined here
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    employeeId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "employeeId is required"},
      }
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "customerId is required"},
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "firstName is required"},
      }
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    designation: {
      type: DataTypes.STRING,
    },
    department: {
      type: DataTypes.STRING,
    },
    phoneNumber1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "phoneNumber1 is required"},
      }
    },
    phoneNumber2: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'ContactPerson',
  });

  ContactPerson.sync().then(()=>console.log("ContactPerson was successfully synced"));

