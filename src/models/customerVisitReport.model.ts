import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class CustomerVisitReport extends Model { }

  CustomerVisitReport.init({
    // Model attributes are defined here
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    customerVisitId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "customerVisitId is required"},
      }
    },
    callType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "callType is required"},
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "status is required"},
      }
    },
    productsDiscussed: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: {
        notEmpty:{ msg: "productsDiscussed is required"},
      }
    },
    price: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.STRING,
    },
    durationOfMeeting: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "durationOfMeeting is required"},
      }
    },
    meetingOutcome: {
      type: DataTypes.STRING,
    },
    nextVisitDate: {
      type: DataTypes.STRING,
    },
    nextVisitTime: {
      type: DataTypes.STRING,
    },
    pfiRequest: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'CustomerVisitReport',
  });

  CustomerVisitReport.sync({force: true}).then(()=>console.log("CustomerVisitReport was successfully synced"));

