"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
var Order = dbConnection_1.default.define('Order', {
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    pfiRequestForms: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
        defaultValue: null
    }
});
Order.sync().then(() => console.log("Order was successfully synced"));
exports.default = Order;
//# sourceMappingURL=order.model.js.map