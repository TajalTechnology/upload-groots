"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configFile = exports.credential = exports.UPLOAD_CONSTANTS = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
exports.UPLOAD_CONSTANTS = Object.freeze({
    NOT_FOUND: 'File not found',
    GCP_URL: 'https://storage.googleapis.com',
    ERROR: 'File not upload to the server',
    FILE_TYPE_ERROR: 'This file type does not support right now',
    FILE_SIZE_ERROR: 'File size too large',
    FILE_VALIDATION_ERROR: 'File validation error',
    CREDENTIALS_MISSING: 'Your credentials are missing'
});
exports.credential = {
    region: process.env.REGION,
    bucketName: process.env.BUCKET_NAME,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
};
exports.configFile = {
    type: process.env.PROFILE_TYPE,
    maxSize: process.env.MAX_SIZE,
    prefix: process.env.PREFIX,
    suffix: process.env.SUFFIX,
    destination: process.env.DESTINATION,
    extentions: [process.env.JPG, process.env.PNG, process.env.PDF, process.env.JPEG]
};
