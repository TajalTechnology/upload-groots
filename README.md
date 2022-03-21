# upload groots

Follow this step to upload your file using this npm package.

## Installation

```sh
$ npm i upload-groots
```

## Usage

#### AWS S3 bucket

If you upload your file into aws s3 bucket, follow this step:

```
import { fileStorageAws } from 'upload-groots';
let file = req.file

  const credential = {
    accessKeyId,
    secretAccessKey,
    region,
    bucketName,
  };

  //for upload your file
  await fileStorageAws.upload(credential, file);

//for delete your file
  await fileStorageAws.delete(credential, file);

//for getFile your file
  await fileStorageAws.getFile(fileName, bucketName);

```

#### GOOGLE CLOUD STORAGE

If you upload your file into Google clouse storage, follow this step:

```
import { fileStorageGcp } from 'upload-groots';
let file = req.file

  const credential = {
    accessKeyId,
    secretAccessKey,
    region,
    bucketName,
  };

//for upload your file
  await fileStorageGcp.upload(credential, file);

//for delete your file
  await fileStorageGcp.delete(credential, file);

//for getFile your file
  await fileStorageGcp.getFile(fileName, bucketName);

```
