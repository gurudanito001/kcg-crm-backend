"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class Payment extends sequelize_1.Model {
}
exports.default = Payment;
Payment.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    invoiceNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    invoiceDate: {
        type: sequelize_1.DataTypes.STRING,
    },
    deliveryDate: {
        type: sequelize_1.DataTypes.STRING,
    },
    nameOfCustomer: {
        type: sequelize_1.DataTypes.STRING,
    },
    customerAddress: {
        type: sequelize_1.DataTypes.STRING,
    },
    modelOfVehiclePurchased: {
        type: sequelize_1.DataTypes.STRING,
    },
    quantityPurchased: {
        type: sequelize_1.DataTypes.STRING,
    },
    advancePaymentReceived: {
        type: sequelize_1.DataTypes.STRING,
    },
    outstandingAmount: {
        type: sequelize_1.DataTypes.STRING,
    },
    vatDeducted: {
        type: sequelize_1.DataTypes.STRING,
    },
    whtDeducted: {
        type: sequelize_1.DataTypes.STRING,
    },
    vatPaymentReceipt: {
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
    modelName: 'Payment',
});
Payment.sync().then(() => console.log("Payment was successfully synced"));
//# sourceMappingURL=payment.model.js.map