
var Utils = require('../../../common/services/utils')
var fs = require('fs');
var path = require('path');
exports.uploadImageAndGetURL = (req, res, next) => {

    var tmp_path = req.file.path;
    console.log(req.file);
    const splitForExtention = req.file.originalname.split('.')
    const ext = splitForExtention[splitForExtention.length - 1];
    /** The original name of the uploaded file
        stored in the variable "originalname". **/
      const fileName = req.file.filename + (new Date().getTime()).toString() + '.' + ext
    // var target_path = __dirname + 'public/uploads/' + fileName;
    var target_path = path.join(process.cwd(), 'public/uploads/', fileName)
  
    /** A better way to copy the uploaded file. **/
    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function() { 
      return res.send(Utils.sendResponse(200, {fileUrl: APP_CONFIG.IMAGE_RESPONSE_URL + 'uploads/' + fileName }, [], 'Uploaded successfully'));
    });
    src.on('error', function(err) {
      if (err) {
        return res.send(Utils.sendResponse(500, null, ['Unable to upload image. Please try again'], 'Unable to Upload Image. Please try again'));
      }
    });
  };