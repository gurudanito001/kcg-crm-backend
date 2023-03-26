import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class CustomerVisit extends Model { }

  CustomerVisit.init({
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
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "companyName is required"},
      }
    },
    personToVisitId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "personToVisitId is required"},
      }
    },
    personToVisitName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "personToVisitName is required"},
      }
    },
    meetingDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "meetingDate is required"},
      }
    },
    meetingTime: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{ msg: "meetingTime is required"},
      }
    },
    meetingVenue: {
      type: DataTypes.STRING,
    },
    meetingPurpose: {
      type: DataTypes.STRING,
    },
    visitReportId: {
      type: DataTypes.UUID,
      defaultValue: null
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'CustomerVisit',
  });

  CustomerVisit.sync().then(()=>console.log("CustomerVisit was successfully synced"));

