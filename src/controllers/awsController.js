//πππππππππ[Hello it's AWS-Controller]πππππππππ//

const aws = require("aws-sdk");

//*****************************[πaws configurationπ]***************************//
aws.config.update({
  accessKeyId: "AKIAY3L35MCRUJ6WPO6J",
  secretAccessKey: "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",
  region: "ap-south-1",
});

//***************************[πupload files on AWS-S3π]************************//
let uploadFile = async (file) => {
  return new Promise(function (resolve, reject) {
    let s3 = new aws.S3({ apiVersion: "2006-03-01" });

    let uploadParams = {
      ACL: "public-read",
      Bucket: "classroom-training-bucket",
      Key: "Mahesh/" + file.originalname,
      Body: file.buffer,
    };

    s3.upload(uploadParams, function (err, data) {
      if (err) {
        return reject({ error: err });
      }
      // console.log(data);
      console.log("file uploaded succesfully");
      return resolve(data.Location);
    });
  });
};

//**************************[All-Function'sπ Exports]****************************//
module.exports = { uploadFile };

//πππππππ[Thank You AWS-Controller End]ππππππππ//
