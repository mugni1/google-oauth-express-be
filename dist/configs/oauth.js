"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGoogleUrl = exports.authClient = void 0;
const googleapis_1 = require("googleapis");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.authClient = new googleapis_1.google.auth.OAuth2({
    clientId: process.env.CLIENT_ID || "",
    clientSecret: process.env.CLIENT_SECRET || "",
    redirectUri: process.env.BE_ORIGIN_URL + "/auth/google/callback"
});
exports.authGoogleUrl = exports.authClient.generateAuthUrl({
    access_type: "offline",
    scope: ["email", "profile"],
    include_granted_scopes: true
});
