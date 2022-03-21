"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileStorageGcp = exports.fileStorageAws = exports.FileStore = void 0;
var interface_1 = require("./types/interface");
var awsService_1 = require("./uploader/providers/awsService");
var gcpService_1 = require("./uploader/providers/gcpService");
var FileStore = /** @class */ (function () {
    function FileStore(provider) {
        switch (provider) {
            case interface_1.Providers.AWS:
                this.uploader = new awsService_1.AWS();
                break;
            default:
                this.uploader = new gcpService_1.GCP();
        }
    }
    FileStore.prototype.upload = function (creadentials, file) {
        return this.uploader.uploadFile(creadentials, file);
    };
    FileStore.prototype.delete = function (creadentials, file) {
        return this.uploader.deleteFile(creadentials, file);
    };
    FileStore.prototype.getFile = function (fileName, bucketName) {
        return this.uploader.getFile(fileName, bucketName);
    };
    return FileStore;
}());
exports.FileStore = FileStore;
exports.fileStorageAws = new FileStore(interface_1.Providers.AWS);
exports.fileStorageGcp = new FileStore(interface_1.Providers.GCP);
