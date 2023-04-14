"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class Notification extends sequelize_1.Model {
}
exports.default = Notification;
Notification.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    message: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
    },
    receiverId: {
        type: sequelize_1.DataTypes.UUID,
    },
    viewed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    extraData: {
        type: sequelize_1.DataTypes.JSON,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'Notification',
});
Notification.sync().then(() => console.log("Notification was successfully synced"));
//# sourceMappingURL=notification.model.js.map