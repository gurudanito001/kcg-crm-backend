import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class Notification extends Model { }

  Notification.init({
    // Model attributes are defined here
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
    },
    resourceId: {
      type: DataTypes.UUID,
    },
    viewed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    extraData: {
      type: DataTypes.JSON,
    }
  }, {
    sequelize,
    modelName: 'Notification',
  });

  Notification.sync().then(()=>console.log("Notification was successfully synced"));

