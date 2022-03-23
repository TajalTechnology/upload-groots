export async function fileValidation(file: any, Option: any): Promise<boolean | string> {
  file.filename = `${Option.prefix}-${file.filename}-${Option.suffix}`;
  file.destination = Option.destination;

  //check file extention
  const array = file.originalname.split('.');
  const fileExt = array[array.length - 1];
  if (!Option.extentions.includes(fileExt)) return false;

  //check file size compare with MB
  const fileSize = file.size / 1000000;
  if (fileSize > Option.maxSize) return false;
  return true;
}
