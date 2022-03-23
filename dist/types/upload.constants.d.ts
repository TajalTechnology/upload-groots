export declare const UPLOAD_CONSTANTS: Readonly<{
    NOT_FOUND: string;
    GCP_URL: string;
    ERROR: string;
    FILE_TYPE_ERROR: string;
    FILE_SIZE_ERROR: string;
    FILE_VALIDATION_ERROR: string;
    CREDENTIALS_MISSING: string;
}>;
export declare const credential: {
    region: string | undefined;
    bucketName: string | undefined;
    accessKeyId: string | undefined;
    secretAccessKey: string | undefined;
};
export declare const configFile: {
    type: string | undefined;
    maxSize: string | undefined;
    prefix: string | undefined;
    suffix: string | undefined;
    destination: string | undefined;
    extentions: (string | undefined)[];
};
