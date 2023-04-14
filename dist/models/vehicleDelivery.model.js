"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class VehicleDelivery extends sequelize_1.Model {
}
exports.default = VehicleDelivery;
VehicleDelivery.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    invoiceRequestFormId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    customerName: {
        type: sequelize_1.DataTypes.STRING,
    },
    customerAddress: {
        type: sequelize_1.DataTypes.STRING,
    },
    invoiceNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    deliveryNoteNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    chasisNumbers: {
        type: sequelize_1.DataTypes.STRING,
    },
    bodyBuilding: {
        type: sequelize_1.DataTypes.STRING,
    },
    totalOrderQuantity: {
        type: sequelize_1.DataTypes.STRING,
    },
    quantityDelivered: {
        type: sequelize_1.DataTypes.STRING,
    },
    quantityPending: {
        type: sequelize_1.DataTypes.STRING,
    },
    nameOfDriver: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleRecipientName: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleRecipientPhone: {
        type: sequelize_1.DataTypes.STRING,
    },
    receiverRelationshipWithBuyer: {
        type: sequelize_1.DataTypes.STRING,
    },
    additionalInformation: {
        type: sequelize_1.DataTypes.STRING,
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'VehicleDelivery',
});
VehicleDelivery.sync({ force: true }).then(() => console.log("VehicleDelivery was successfully synced"));
//# sourceMappingURL=vehicleDelivery.model.js.map