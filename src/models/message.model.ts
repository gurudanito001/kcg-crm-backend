import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from "../dbConnection";


  export default class Message extends Model { }

  Message.init({
    // Model attributes are defined here
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    sender: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    receiverId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    resourceUrl: {
      type: DataTypes.UUID,
    },
    message: {
      type: DataTypes.TEXT,
    },
    viewed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    extraData: {
      type: DataTypes.JSONB,
    }
  }, {
    sequelize,
    modelName: 'Message',
  });

  Message.sync().then(()=>console.log("Message was successfully synced"));

