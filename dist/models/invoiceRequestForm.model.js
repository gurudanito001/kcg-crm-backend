"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class InvoiceRequestForm extends sequelize_1.Model {
}
exports.default = InvoiceRequestForm;
InvoiceRequestForm.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    invoiceName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    address1: {
        type: sequelize_1.DataTypes.STRING,
    },
    address2: {
        type: sequelize_1.DataTypes.STRING,
    },
    contactOfficeTelephone: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    salesThru: {
        type: sequelize_1.DataTypes.STRING,
    },
    industry: {
        type: sequelize_1.DataTypes.STRING,
    },
    businessType: {
        type: sequelize_1.DataTypes.STRING,
    },
    kycId: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleDetails: {
        type: sequelize_1.DataTypes.STRING,
    },
    quantity: {
        type: sequelize_1.DataTypes.STRING,
    },
    colour: {
        type: sequelize_1.DataTypes.STRING,
    },
    totalInvoiceValuePerVehicle: {
        type: sequelize_1.DataTypes.STRING,
    },
    typeOfBodyBuilding: {
        type: sequelize_1.DataTypes.STRING,
    },
    bodyFabricatorName: {
        type: sequelize_1.DataTypes.STRING,
    },
    expectedDeliveryDate: {
        type: sequelize_1.DataTypes.STRING,
    },
    deliveryLocation: {
        type: sequelize_1.DataTypes.STRING,
    },
    registration: {
        type: sequelize_1.DataTypes.STRING,
    },
    delivery: {
        type: sequelize_1.DataTypes.STRING,
    },
    vatDeduction: {
        type: sequelize_1.DataTypes.STRING,
    },
    whtDeduction: {
        type: sequelize_1.DataTypes.STRING,
    },
    paymentStatus: {
        type: sequelize_1.DataTypes.STRING,
    },
    LPO: {
        type: sequelize_1.DataTypes.STRING,
    },
    warrantyCertificate: {
        type: sequelize_1.DataTypes.STRING,
    },
    agreedCreditPeriod: {
        type: sequelize_1.DataTypes.STRING,
    },
    rebateReceiver: {
        type: sequelize_1.DataTypes.STRING,
    },
    rebateAmount: {
        type: sequelize_1.DataTypes.STRING,
    },
    relationshipWithTransaction: {
        type: sequelize_1.DataTypes.STRING,
    },
    accountDetailsToTransfer: {
        type: sequelize_1.DataTypes.STRING,
    },
    refundToCustomer: {
        type: sequelize_1.DataTypes.STRING,
    },
    servicePackageDetails: {
        type: sequelize_1.DataTypes.STRING,
    },
    approvedBy: {
        type: sequelize_1.DataTypes.JSON,
    },
    additionalInformation: {
        type: sequelize_1.DataTypes.STRING,
    },
    extraData: {
        type: sequelize_1.DataTypes.JSONB,
    }
}, {
    sequelize: dbConnection_1.default,
    modelName: 'InvoiceRequestForm',
});
InvoiceRequestForm.sync().then(() => console.log("InvoiceRequestForm was successfully synced"));
//# sourceMappingURL=invoiceRequestForm.model.js.map