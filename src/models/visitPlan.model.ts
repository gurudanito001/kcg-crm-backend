import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class VisitPlan extends Model { }

  VisitPlan.init({
    // Model attributes are defined here
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    employee: {
      type: DataTypes.JSON,
    },
    weeklyVisitPlan: {
      type: DataTypes.JSON,
    },
    monthlyVisitPlan: {
      type: DataTypes.JSON,
    },
    extraData: {
      type: DataTypes.JSONB,
    }
    
  }, {
    sequelize,
    modelName: 'VisitPlan',
  });

  VisitPlan.sync().then(()=>console.log("VisitPlan was successfully synced"));

