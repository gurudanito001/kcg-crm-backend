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
    /* customerVisit: {
      type: DataTypes.JSON,
      allowNull: false
    }, */
    callType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
    },
    productsDiscussed: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
    price: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    durationOfMeeting: {
      type: DataTypes.STRING,
    },
    meetingOutcome: {
      type: DataTypes.STRING,
    },
    nextVisit: {
      type: DataTypes.JSON,
    },
    pfiRequest: {
      type: DataTypes.BOOLEAN
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'CustomerVisitReport',
  });

  CustomerVisitReport.sync().then(()=>console.log("CustomerVisitReport was successfully synced"));

