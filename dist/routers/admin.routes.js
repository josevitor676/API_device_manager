"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
const ensureDataIsValid_middleware_1 = __importDefault(require("../middlewares/ensureDataIsValid.middleware"));
const admin_schemas_1 = require("../schemas/admin.schemas");
const adminRoutes = (0, express_1.Router)();
adminRoutes.post('', (0, ensureDataIsValid_middleware_1.default)(admin_schemas_1.createAdminSchema), admin_controller_1.createAdminController);
exports.default = adminRoutes;
