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
exports.loginAdminController = exports.createAdminController = void 0;
const createAdmin_service_1 = __importDefault(require("../service/Admin/createAdmin.service"));
const loginAdmin_service_1 = __importDefault(require("../service/Admin/loginAdmin.service"));
const createAdminController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const adminData = req.body;
    const admin = yield (0, createAdmin_service_1.default)(adminData);
    return res.status(201).json(admin);
});
exports.createAdminController = createAdminController;
const loginAdminController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginData = req.body;
    const token = yield (0, loginAdmin_service_1.default)(loginData);
    return res.json({ token: token });
});
exports.loginAdminController = loginAdminController;
