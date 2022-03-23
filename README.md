# upload groots

Follow this step to upload your file into cloud(AWS/GCP) using this npm package.

## Installation

```sh
$ npm i upload-groots
```

## Usage

#### AWS S3 bucket

If you upload your file into aws s3 bucket, follow this step:

```
import { fileStorageAws, fileStorageGcp } from 'upload-groots';
```

Inside your controller, process those variables

```
let file = req.file
```

#### GOOGLE CLOUD STORAGE

Then use those line of of CODE to upload file into google cloud storage

```
  /*
  *for upload your file
  * If you want to configure send your configuration using Options parameters.
  */
  await fileStorageAws.upload(file, Options);

  /*
  *for upload your file
  * Without configuration
  */
   await fileStorageAws.upload(file);

  //for delete your file
  await fileStorageAws.delete(file);

  //for getFile your file
  await fileStorageAws.getFile(fileName, bucketName);
```

#### AWS S3 BUCKET

Or use those line of of code to upload file into aws s3 bucket

```
  /*
  *for upload your file
  * If you want to configure send your configuration using Options parameters.
  */
  await fileStorageGcp.upload(file, Options);

  /*
  *for upload your file
  * Without configuration.
  */
  await fileStorageGcp.upload(file, Options);

  //for delete your file
  await fileStorageGcp.delete(file, Options);

  //for getFile your file
  await fileStorageGcp.getFile(fileName, bucketName);

```
