"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const typeorm_1 = require("typeorm");
const client_entity_1 = require("./client.entity");
let Device = class Device {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Device.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 35 }),
    __metadata("design:type", String)
], Device.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 35 }),
    __metadata("design:type", String)
], Device.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Device.prototype, "defeito", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Device.prototype, "preco", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Device.prototype, "completed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Device.prototype, "dataSaida", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Object)
], Device.prototype, "dataEntrada", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_entity_1.Client, client => client.devices),
    __metadata("design:type", client_entity_1.Client)
], Device.prototype, "cliente", void 0);
Device = __decorate([
    (0, typeorm_1.Entity)('device')
], Device);
exports.Device = Device;
