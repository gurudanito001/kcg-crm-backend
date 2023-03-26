import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";

var MarkettingActivity = sequelize.define('MarkettingActivity', {
    // Model attributes are defined here
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
        notEmpty: { msg: "name is required"}
      }
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "date is required"}
      }
    },
    participants: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
      validate: {
        notEmpty: { msg: "participants are required"}
      }
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "location is required"}
      }
    },
    objective: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "objective is required"}
      }
    },
    targetResult: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "targetResult is required"}
      }
    },
    briefReport: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "briefReport is required"}
      }
    },
    pictures: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: {
        notEmpty:{ msg: "pictures are required"},
      }
    },
    costIncurred: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "costIncurred is required"},
      }
    },
    pdfDetails: {
      type: DataTypes.STRING,
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  });

  MarkettingActivity.sync().then(()=>console.log("MarkettingActivity was successfully synced"));
export default MarkettingActivity

