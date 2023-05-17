"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invoiceRequestForm_model_1 = __importDefault(require("../models/invoiceRequestForm.model"));
const imageService_1 = require("../services/imageService");
class Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.body;
            try {
                /* let result = await uploadImage({ data: data.warrantyCertificate });
                if(!result){
                  return res.status(400).json({message: "Could not Save Logo"})
                }
                data.warrantyCertificate = result.secure_url */
                let savedData = yield invoiceRequestForm_model_1.default.create(data);
                if (savedData) {
                    return res.status(201).json({
                        message: "Invoice Request Form Created Successfully",
                        status: "success",
                        statusCode: 201,
                        payload: savedData
                    });
                }
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.body;
            try {
                let allData = yield invoiceRequestForm_model_1.default.findAll({
                    order: [['createdAt', 'DESC']]
                });
                if (allData) {
                    return res.status(200).json({
                        message: "Invoice Request Form Fetched Successfully",
                        status: "success",
                        statusCode: 200,
                        payload: allData
                    });
                }
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    getAllByEmployeeId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let allData = yield invoiceRequestForm_model_1.default.findAll({
                    where: { employeeId: id },
                    order: [['createdAt', 'DESC']]
                });
                if (allData) {
                    return res.status(200).json({
                        message: "Invoice Requests Fetched Successfully",
                        status: "success",
                        statusCode: 200,
                        payload: allData
                    });
                }
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let oneData = yield invoiceRequestForm_model_1.default.findByPk(id);
                if (oneData) {
                    return res.status(200).json({
                        message: "Invoice Request Form Fetched Successfully",
                        status: "success",
                        statusCode: 200,
                        payload: oneData
                    });
                }
                return res.status(404).json({ message: "Invoice Request Form not found" });
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    updateOne(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let data = req.body;
            try {
                if ((_a = data === null || data === void 0 ? void 0 : data.warrantyCertificate) === null || _a === void 0 ? void 0 : _a.startsWith("data:image")) {
                    let result = yield (0, imageService_1.uploadImage)({ data: data.warrantyCertificate });
                    if (!result) {
                        return res.status(400).json({ message: "Could not Save Image" });
                    }
                    data.warrantyCertificate = result.secure_url;
                }
                let updatedData = yield invoiceRequestForm_model_1.default.update(data, {
                    where: { id: id }
                });
                if (updatedData) {
                    return res.status(200).json({
                        message: "Invoice Request Form updated successfully",
                        status: "success",
                        statusCode: 200,
                        payload: updatedData
                    });
                }
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    approveInvoiceRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let updatedData = yield invoiceRequestForm_model_1.default.update({ approved: true }, {
                    where: { id: id }
                });
                if (updatedData) {
                    return res.status(200).json({
                        message: "Invoice Request approved",
                        status: "success",
                        statusCode: 200,
                        payload: updatedData
                    });
                }
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let deletedData = yield invoiceRequestForm_model_1.default.destroy({
                    where: { id: id }
                });
                if (deletedData) {
                    return res.status(200).json({
                        message: "Invoice Request Form deleted successfully",
                        status: "success",
                        statusCode: 200,
                        payload: deletedData
                    });
                }
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
}
const InvoiceRequestFormController = new Controller();
exports.default = InvoiceRequestFormController;
//# sourceMappingURL=invoiceRequestForm.controller.js.map