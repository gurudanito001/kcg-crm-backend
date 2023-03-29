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
const product_model_1 = __importDefault(require("../models/product.model"));
const imageService_1 = require("../services/imageService");
class Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.body;
            try {
                if (data.images.length > 0) {
                    let productImagesUrls = yield Promise.all(data.images.map((base64Img) => __awaiter(this, void 0, void 0, function* () {
                        let image = yield (0, imageService_1.uploadImage)({ data: base64Img });
                        return image.secure_url;
                    })));
                    data.images = productImagesUrls;
                }
                let savedData = yield product_model_1.default.create(data);
                if (savedData) {
                    return res.status(201).json({
                        message: "Product Created Successfully",
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
                let allData = yield product_model_1.default.findAll();
                if (allData) {
                    return res.status(200).json({
                        message: "Product Fetched Successfully",
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
                let oneData = yield product_model_1.default.findByPk(id);
                if (oneData) {
                    return res.status(200).json({
                        message: "Product Fetched Successfully",
                        status: "success",
                        statusCode: 200,
                        payload: oneData
                    });
                }
                return res.status(404).json({ message: "Product not found" });
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    getByProductGroupId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let allData = yield product_model_1.default.findAll({ where: { productGroupId: id } });
                if (allData) {
                    return res.status(200).json({
                        message: "Products Fetched Successfully",
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
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let data = req.body;
            try {
                let imagesFromDB = data.images.filter((item) => item.startsWith("https://"));
                let imagesFromLocal = data.images.filter((item) => item.startsWith("data:image"));
                if (imagesFromLocal.length > 0) {
                    let imagesUrls = yield Promise.all(imagesFromLocal.map((base64Img) => __awaiter(this, void 0, void 0, function* () {
                        let picture = yield (0, imageService_1.uploadImage)({ data: base64Img });
                        return picture.secure_url;
                    })));
                    data.images = [...imagesFromDB, ...imagesUrls];
                }
                let updatedData = yield product_model_1.default.update(data, {
                    where: { id: id }
                });
                if (updatedData) {
                    return res.status(200).json({
                        message: "Product updated successfully",
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
                let deletedData = yield product_model_1.default.destroy({
                    where: { id: id }
                });
                if (deletedData) {
                    return res.status(200).json({
                        message: "Product deleted successfully",
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
const ProductController = new Controller();
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map