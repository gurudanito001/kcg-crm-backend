"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
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
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: { msg: "employeeId is required" },
        }
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: { msg: "customerId is required" },
        }
    },
    companyName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "companyName is required" },
        }
    },
    personToVisitId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: { msg: "personToVisitId is required" },
        }
    },
    personToVisitName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "personToVisitName is required" },
        }
    },
    meetingDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "meetingDate is required" },
        }
    },
    meetingTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "meetingTime is required" },
        }
    },
    meetingVenue: {
        type: sequelize_1.DataTypes.STRING,
    },
    meetingPurpose: {
        type: sequelize_1.DataTypes.STRING,
    },
    visitReportId: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: null
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'CustomerVisit',
});
CustomerVisit.sync().then(() => console.log("CustomerVisit was successfully synced"));
//# sourceMappingURL=customerVisit.model.js.map