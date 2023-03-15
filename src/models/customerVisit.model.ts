import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";
import Customer from './customer.model';
import CustomerVisitReport from './customerVisitReport.model';
import Employee from './employee.model';


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
    EmployeeId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    CustomerId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    personToVisit: {
      type: DataTypes.JSON,
    },
    meetingDate: {
      type: DataTypes.STRING,
    },
    meetingVenue: {
      type: DataTypes.STRING,
    },
    meetingPurpose: {
      type: DataTypes.STRING,
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'CustomerVisit',
  });

  CustomerVisit.hasOne(CustomerVisitReport);

  CustomerVisit.sync().then(()=>console.log("CustomerVisit was successfully synced"));

