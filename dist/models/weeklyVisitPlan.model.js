"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class WeeklyVisitPlan extends sequelize_1.Model {
}
exports.default = WeeklyVisitPlan;
WeeklyVisitPlan.init({
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
        allowNull: false
    },
    week: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    month: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'WeeklyVisitPlan',
});
WeeklyVisitPlan.sync().then(() => console.log("WeeklyVisitPlan was successfully synced"));
//# sourceMappingURL=weeklyVisitPlan.model.js.map