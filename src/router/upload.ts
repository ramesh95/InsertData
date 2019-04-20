// import express = require("express");
// var router = express.Router();

// const multer = require('multer');
// var storage =   multer.diskStorage({
//   destination: function (req:any, file:any, callback:any) {
//     callback(null, '../files');
//   },
//   filename: function (req:any, file:any, callback:any) {
//     callback(null, file.fieldname + '-' + Date.now());
//   }
// });

// var upload = multer({ storage : storage}).single('userPhoto');

// router.post('/upload', function(req, res){
//     upload(req, res)
//     res.json({
//         success: true
//     , message: "image Upload"
//     })
// })
