"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
var MonthlyTarget = dbConnection_1.default.define('MonthlyTarget', {
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
    month: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    monthlyTarget: {
        type: sequelize_1.DataTypes.JSONB,
    },
    planForMonth: {
        type: sequelize_1.DataTypes.TEXT
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
});
MonthlyTarget.sync().then(() => console.log("MonthlyTarget was successfully synced"));
exports.default = MonthlyTarget;
//# sourceMappingURL=monthlyTarget.model.js.map