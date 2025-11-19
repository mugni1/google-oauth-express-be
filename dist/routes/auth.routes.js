"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const oauth_1 = require("../configs/oauth");
const auth_controller_1 = require("../controllers/auth.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/auth/google", (_, res) => { res.redirect(oauth_1.authGoogleUrl); });
router.get("/auth/google/callback", auth_controller_1.googleCallback);
exports.default = router;
