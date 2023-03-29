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
const company_model_1 = __importDefault(require("../models/company.model"));
const branch_model_1 = __importDefault(require("../models/branch.model"));
const imageService_1 = require("../services/imageService");
class Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.body;
            try {
                let result = yield (0, imageService_1.uploadImage)({ data: data.logo });
                if (!result) {
                    return res.status(400).json({ message: "Could not Save Logo" });
                }
                let { name, group, email, code, address, brands, extraData } = data;
                let savedData = yield company_model_1.default.create({ name, group, email, code, address, brands, logo: result.secure_url, extraData });
                if (savedData) {
                    return res.status(201).json({
                        message: "Company Created Successfully",
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
                let allData = yield company_model_1.default.findAll();
                if (allData) {
                    return res.status(200).json({
                        message: "Companies Fetched Successfully",
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
                let oneData = yield company_model_1.default.findByPk(id);
                let branches = yield branch_model_1.default.findAll({
                    where: { companyId: id }
                });
                oneData.branches = branches;
                if (oneData) {
                    return res.status(200).json({
                        message: "Company Fetched Successfully",
                        status: "success",
                        statusCode: 200,
                        payload: oneData
                    });
                }
                return res.status(404).json({ message: "Company not found" });
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let data = req.body;
            try {
                if (data.logo.startsWith("data:image")) {
                    let result = yield (0, imageService_1.uploadImage)({ data: data.logo });
                    if (!result) {
                        return res.status(400).json({ message: "Could not Save Logo" });
                    }
                    data.logo = result.secure_url;
                }
                let updatedData = yield company_model_1.default.update(data, {
                    where: { id: id }
                });
                if (updatedData) {
                    return res.status(200).json({
                        message: "Company updated successfully",
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
                let deletedData = yield company_model_1.default.destroy({
                    where: { id: id }
                });
                if (deletedData) {
                    return res.status(200).json({
                        message: "Company deleted successfully",
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
const CompanyController = new Controller();
exports.default = CompanyController;
//# sourceMappingURL=company.controller.js.map