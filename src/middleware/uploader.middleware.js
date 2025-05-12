const multer = require("multer");
const fs = require("fs");
const { randomStringGenerator } = require("../../utilities/helper");

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let filePath = "./public/uploads";

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    let filename = randomStringGenerator(15) + "-" + file.originalname;
    cb(null, filename);
  },
});

const uploader = (type = "image") => {
  const uploadConfig = {
    fileSize: 3 * 1024 * 1024,
    fileFilter: function (req, file, cb) {
        let allowedExts = ['jpg','png','jpeg','svg','gif','webp','bmp']
        if (type === 'docs') {
            this.fileSize = 500000;  
            allowedExts = ['doc', 'docx', 'pdf', 'xls', 'csv', 'json', 'xlsx'];
        } else if (type === 'audio') {
            this.fileSize = 10000000;  
            allowedExts = ['mp3', 'wav', 'ogg', 'flac', 'aac'];
        } else if (type === 'video') {
            this.fileSize = 50000000;  
            allowedExts = ['mp4', 'mkv', 'avi', 'mov', 'flv', 'webm'];
        }

        const fileExt = file.originalname.split('.').pop()
        if (allowedExts.includes(fileExt.toLowerCase())){
            cb(false,true)
        }
        else{
            cb({
                code:422,
                message:"file format not supported",
                status:"INVALID_FILE_FORMAT"
            })
        }
    },
  };

  return multer({
    storage: myStorage,
    fileFilter: uploadConfig.fileFilter,
    limits: {
      fileSize: uploadConfig.fileSize,
    },
  });
};
 module.exports = uploader

//file not upload , parse multipart/form-data
//uploaderInst.none()
// upload a single file from a field
//uploaderInst.single('filename')
// upload a multiple file from a single field
//uploaderInst.array('filename')
// upload a multiple file from a multiple field
//uploaderInst.fields({name:'image", maxcount:1},{name:"images",maxCount:5})

// things we need to configure for the multer is storage , filefilter, limits

/*/
  flow to upload file
    file=> our server
     /public/uploads/...
          * controller
          / file upload cloudinary
           ,error handler
           /delete file
   */
