/* eslint-disable no-console */
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import fs from 'fs';
import config from '../config';
cloudinary.config({
  cloud_name: config.cloudinary_cloud_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_screct,
});
export const uploadImage = (path: string, imageName: string) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      { public_id: imageName },
      function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
          fs.unlink(path, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log('File removed successfully');
            }
          });
        }
      },
    );
  });
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + '/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
  },
});

export const upload = multer({ storage: storage });
