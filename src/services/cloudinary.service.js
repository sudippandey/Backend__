const { appConfig } = require("../config/config");
const {deleteFile} = require('../../utilities/helper');
const cloudinary = require("cloudinary").v2;
class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: appConfig.cloudinaryCloudName,
      api_key: appConfig.cloudinaryApiKey,
      api_secret: appConfig.cloudinaryApiSecret,
    });
  }
  fileUpload = async (filePath, dir = "/") => {
    try {
      const { public_id, url, secure_url } = await cloudinary.uploader.upload(
        filePath,
        {
          unique_filename: true,
          folder: "/api-42" + dir,
          resource_type: "auto",
        }
      );
      // delete file
      deleteFile(filePath);

      const optimize = cloudinary.url(public_id, {
        transformation: [
          { width: 350, crop: "scale" },
          { fetch_format: "auto" },
        ],
     
    });
    return{
        public_id,
        secure_url,
        optimized_url: optimize
    }
    } catch (exception) {
      console.log(exception)
      throw {
        code: 500,
        message: "file upload error in cloudinary",
        status: "FILE_UPLOAD_ERROR",
      };
    }
  };
}

const cloudinarySvc = new CloudinaryService();
module.exports = cloudinarySvc;
