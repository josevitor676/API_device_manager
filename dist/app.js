"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const errors_1 = require("./errors");
const admin_routes_1 = __importDefault(require("./routers/admin.routes"));
const login_routes_1 = __importDefault(require("./routers/login.routes"));
const client_routes_1 = __importDefault(require("./routers/client.routes"));
const device_routes_1 = __importDefault(require("./routers/device.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/admin', admin_routes_1.default);
app.use('/login', login_routes_1.default);
app.use('/client', client_routes_1.default);
app.use('/device', device_routes_1.default);
app.use(errors_1.handleErrors);
exports.default = app;