"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class VisitPlan extends sequelize_1.Model {
}
exports.default = VisitPlan;
VisitPlan.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    employee: {
        type: sequelize_1.DataTypes.JSON,
    },
    weeklyVisitPlan: {
        type: sequelize_1.DataTypes.JSON,
    },
    monthlyVisitPlan: {
        type: sequelize_1.DataTypes.JSON,
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'VisitPlan',
});
VisitPlan.sync().then(() => console.log("VisitPlan was successfully synced"));
//# sourceMappingURL=visitPlan.model.js.map