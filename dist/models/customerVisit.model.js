"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
const customerVisitReport_model_1 = __importDefault(require("./customerVisitReport.model"));
class CustomerVisit extends sequelize_1.Model {
}
exports.default = CustomerVisit;
CustomerVisit.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    EmployeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    CustomerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    personToVisit: {
        type: sequelize_1.DataTypes.JSON,
    },
    meetingDate: {
        type: sequelize_1.DataTypes.STRING,
    },
    meetingVenue: {
        type: sequelize_1.DataTypes.STRING,
    },
    meetingPurpose: {
        type: sequelize_1.DataTypes.STRING,
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'CustomerVisit',
});
CustomerVisit.hasOne(customerVisitReport_model_1.default);
CustomerVisit.sync().then(() => console.log("CustomerVisit was successfully synced"));
//# sourceMappingURL=customerVisit.model.js.map