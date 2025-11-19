"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
const app = (0, express_1.default)();
app.get("/", (req, res) => { res.json({ message: "Miau Miau" }); });
app.use(express_1.default.json());
app.use(auth_routes_1.default);
// Vercel Serverless Handler
function handler(req, res) {
    app(req, res);
}
