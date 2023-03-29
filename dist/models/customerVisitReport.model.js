"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class CustomerVisitReport extends sequelize_1.Model {
}
exports.default = CustomerVisitReport;
CustomerVisitReport.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    customerVisitId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            notEmpty: { msg: "customerVisitId is required" },
        }
    },
    callType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "callType is required" },
        }
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "status is required" },
        }
    },
    productsDiscussed: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
        validate: {
            notEmpty: { msg: "productsDiscussed is required" },
        }
    },
    price: {
        type: sequelize_1.DataTypes.STRING,
    },
    quantity: {
        type: sequelize_1.DataTypes.STRING,
    },
    durationOfMeeting: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "durationOfMeeting is required" },
        }
    },
    meetingOutcome: {
        type: sequelize_1.DataTypes.STRING,
    },
    nextVisitDate: {
        type: sequelize_1.DataTypes.STRING,
    },
    nextVisitTime: {
        type: sequelize_1.DataTypes.STRING,
    },
    pfiRequest: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'CustomerVisitReport',
});
CustomerVisitReport.sync().then(() => console.log("CustomerVisitReport was successfully synced"));
//# sourceMappingURL=customerVisitReport.model.js.map