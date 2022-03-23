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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWS = void 0;
var fs_1 = require("fs");
var aws_sdk_1 = require("aws-sdk");
var s3_1 = require("aws-sdk/clients/s3");
var valdates_1 = require("../helper/valdates");
var upload_constants_1 = require("../../types/upload.constants");
var AWS = /** @class */ (function () {
    function AWS(s3) {
        if (s3 === void 0) { s3 = new aws_sdk_1.default.S3(); }
        //aws credentials
        this.Bucket = upload_constants_1.credential.bucketName;
        this.region = upload_constants_1.credential.region;
        this.accessKeyId = upload_constants_1.credential.accessKeyId;
        this.secretAccessKey = upload_constants_1.credential.secretAccessKey;
        this.s3 = new aws_sdk_1.default.S3();
        this.s3 = s3;
    }
    AWS.prototype.uploadFile = function (file, Option) {
        return __awaiter(this, void 0, void 0, function () {
            var validation, Body, Key, uploadParams, s3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Option) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, valdates_1.fileValidation)(file, Option)];
                    case 1:
                        validation = _a.sent();
                        if (validation === false)
                            return [2 /*return*/, upload_constants_1.UPLOAD_CONSTANTS.FILE_VALIDATION_ERROR];
                        _a.label = 2;
                    case 2:
                        Body = fs_1.default.createReadStream(file.path);
                        Key = file.filename;
                        if (!(this.Bucket && Body && Key)) return [3 /*break*/, 4];
                        uploadParams = { Bucket: this.Bucket, Body: Body, Key: Key };
                        s3 = new s3_1.default({
                            region: this.region,
                            accessKeyId: this.accessKeyId,
                            secretAccessKey: this.secretAccessKey
                        });
                        return [4 /*yield*/, s3.upload(uploadParams).promise()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/, upload_constants_1.UPLOAD_CONSTANTS.CREDENTIALS_MISSING];
                }
            });
        });
    };
    AWS.prototype.deleteFile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var Key, params;
            return __generator(this, function (_a) {
                Key = file.filename;
                if (this.Bucket && Key) {
                    params = { Bucket: this.Bucket, Key: file.filename };
                    return [2 /*return*/, this.s3.deleteObject(params)];
                }
                return [2 /*return*/];
            });
        });
    };
    AWS.prototype.getFile = function (fileName, bucketName) {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                file = fs_1.default.createWriteStream(fileName);
                if (file)
                    return [2 /*return*/, file];
                else
                    return [2 /*return*/, false];
                return [2 /*return*/];
            });
        });
    };
    return AWS;
}());
exports.AWS = AWS;
