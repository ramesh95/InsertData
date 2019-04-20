import { ImageEndpoints } from "../controller/upload"
import express = require("express");
var router = express.Router();
var multer = require("multer");
var upload = multer({dest: 'upload/'})


router.get(`/`, async function(
    req: express.Request,
    res: express.Response
  ) {

    res.send("Hello world ");
    res.end();
  });

router.post(`/image` ,async function(
    req: express.Request,
    res: express.Response
  ) {
    let imageName  = req.query.imageName;
    let imageUrl = req.query.imageUrl;
    // let imageUrl = req.body;
    console.log("mmmmmmmm", imageName, imageUrl);
    var newItem = new ImageEndpoints();
    await newItem.addImage(imageName, imageUrl)
    // res.send(resp);
    // res.end();
  });

router.post(`/upload`, upload.single("ImagePrc") ,async function(
    req: express.Request,
    res: express.Response
  ) {
    req.file
    // res.send("resp")
    // res.end();
  });

module.exports = router;
