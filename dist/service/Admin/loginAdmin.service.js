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
const entities_1 = require("../../entities");
const data_source_1 = require("../../data-source");
const errors_1 = require("../../errors");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const loginAdminService = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const adminRepository = data_source_1.AppDataSource.getRepository(entities_1.Admin);
    const admin = yield adminRepository.findOneBy({ email: loginData.email });
    if (!admin) {
        throw new errors_1.AppError('Email or password is wrong!', 404);
    }
    const passwordMatch = yield (0, bcryptjs_1.compare)(loginData.password, admin.password);
    if (!passwordMatch) {
        throw new errors_1.AppError('Email or password is wrong!', 404);
    }
    const token = jsonwebtoken_1.default.sign({
        id: admin.id,
        nomeLoja: admin.nomeLoja
    }, process.env.SECRET_KEY, {
        expiresIn: '24h',
        subject: String(admin.id)
    });
    return token;
});
exports.default = loginAdminService;
