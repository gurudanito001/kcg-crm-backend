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
    /* customerVisit: {
      type: DataTypes.JSON,
      allowNull: false
    }, */
    callType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
    },
    productsDiscussed: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    durationOfMeeting: {
        type: sequelize_1.DataTypes.STRING,
    },
    meetingOutcome: {
        type: sequelize_1.DataTypes.STRING,
    },
    nextVisit: {
        type: sequelize_1.DataTypes.JSON,
    },
    pfiRequest: {
        type: sequelize_1.DataTypes.BOOLEAN
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