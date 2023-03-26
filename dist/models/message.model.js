"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class Message extends sequelize_1.Model {
}
exports.default = Message;
Message.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    senderId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    receiverId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    resourceId: {
        type: sequelize_1.DataTypes.UUID,
    },
    message: {
        type: sequelize_1.DataTypes.TEXT,
    },
    viewed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'Message',
});
Message.sync().then(() => console.log("Message was successfully synced"));
//# sourceMappingURL=message.model.js.map