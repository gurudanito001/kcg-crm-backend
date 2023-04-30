import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class WeeklyVisitPlan extends Model { }

  WeeklyVisitPlan.init({
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
      allowNull: false
    },
    week: {
      type: DataTypes.STRING,
      allowNull: false
    },
    month: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'WeeklyVisitPlan',
  });

  WeeklyVisitPlan.sync().then(()=>console.log("WeeklyVisitPlan was successfully synced"));

