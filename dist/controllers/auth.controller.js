"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleCallback = exports.googleRedirect = void 0;
const oauth_1 = require("../configs/oauth");
const googleapis_1 = require("googleapis");
const googleRedirect = (req, res) => {
    res.redirect(oauth_1.authGoogleUrl);
};
exports.googleRedirect = googleRedirect;
const googleCallback = async (req, res) => {
    const code = req.query.code;
    try {
        // set credentials
        const { tokens } = await oauth_1.authClient.getToken(code);
        oauth_1.authClient.setCredentials(tokens);
        // get user info
        const oauth2 = googleapis_1.google.oauth2({
            auth: oauth_1.authClient,
            version: "v2"
        });
        const { data: userInfo } = await oauth2.userinfo.get();
        res.redirect(`${process.env.FE_ORIGIN_URL}?email=${userInfo.email}&avatar=${userInfo.picture}&name=${userInfo.name}&provider=google`);
    }
    catch {
        res.status(500).send("Something went wrong");
    }
};
exports.googleCallback = googleCallback;
