const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

module.exports = upload;


// s3Middleware.js

// const AWS = require('aws-sdk');
// const multer = require('multer');
// const multerS3 = require('multer-s3');

// const s3 = new AWS.S3({
//   accessKeyId: 'AKIAXBK3P2OLRB7KK65Y',
//   secretAccessKey: 'oIfGYD3Cv0kXNpM0hZuvIKlMm5qqNcAFK+mnEOg5',
// });

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'dummybucket.dev',
//     acl: 'public-read', // Set permissions as needed
//     key: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   }),
// });

// module.exports = upload;
