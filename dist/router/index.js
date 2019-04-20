"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const upload_1 = require("../controller/upload");
const express = require("express");
var router = express.Router();
var multer = require("multer");
var upload = multer({ dest: 'upload/' });
router.get(`/`, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.send("Hello world ");
        res.end();
    });
});
router.post(`/image`, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let imageName = req.query.imageName;
        let imageUrl = req.query.imageUrl;
        // let imageUrl = req.body;
        console.log("mmmmmmmm", imageName, imageUrl);
        var newItem = new upload_1.ImageEndpoints();
        yield newItem.addImage(imageName, imageUrl);
        // res.send(resp);
        // res.end();
    });
});
router.post(`/upload`, upload.single("ImagePrc"), function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        req.file;
        // res.send("resp")
        // res.end();
    });
});
module.exports = router;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlEQUFxRDtBQUNyRCxtQ0FBb0M7QUFDcEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzlCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQTtBQUd0QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUNaLEdBQW9CLEVBQ3BCLEdBQXFCOztRQUdyQixHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFTCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUNsQixHQUFvQixFQUNwQixHQUFxQjs7UUFFckIsSUFBSSxTQUFTLEdBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDbEMsMkJBQTJCO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLE9BQU8sR0FBRyxJQUFJLHVCQUFjLEVBQUUsQ0FBQztRQUNuQyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQzNDLGtCQUFrQjtRQUNsQixhQUFhO0lBQ2YsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVMLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsVUFDOUMsR0FBb0IsRUFDcEIsR0FBcUI7O1FBRXJCLEdBQUcsQ0FBQyxJQUFJLENBQUE7UUFDUixtQkFBbUI7UUFDbkIsYUFBYTtJQUNmLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFTCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJyb3V0ZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZUVuZHBvaW50cyB9IGZyb20gXCIuLi9jb250cm9sbGVyL3VwbG9hZFwiXG5pbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG52YXIgbXVsdGVyID0gcmVxdWlyZShcIm11bHRlclwiKTtcbnZhciB1cGxvYWQgPSBtdWx0ZXIoe2Rlc3Q6ICd1cGxvYWQvJ30pXG5cblxucm91dGVyLmdldChgL2AsIGFzeW5jIGZ1bmN0aW9uKFxuICAgIHJlcTogZXhwcmVzcy5SZXF1ZXN0LFxuICAgIHJlczogZXhwcmVzcy5SZXNwb25zZVxuICApIHtcblxuICAgIHJlcy5zZW5kKFwiSGVsbG8gd29ybGQgXCIpO1xuICAgIHJlcy5lbmQoKTtcbiAgfSk7XG5cbnJvdXRlci5wb3N0KGAvaW1hZ2VgICxhc3luYyBmdW5jdGlvbihcbiAgICByZXE6IGV4cHJlc3MuUmVxdWVzdCxcbiAgICByZXM6IGV4cHJlc3MuUmVzcG9uc2VcbiAgKSB7XG4gICAgbGV0IGltYWdlTmFtZSAgPSByZXEucXVlcnkuaW1hZ2VOYW1lO1xuICAgIGxldCBpbWFnZVVybCA9IHJlcS5xdWVyeS5pbWFnZVVybDtcbiAgICAvLyBsZXQgaW1hZ2VVcmwgPSByZXEuYm9keTtcbiAgICBjb25zb2xlLmxvZyhcIm1tbW1tbW1tXCIsIGltYWdlTmFtZSwgaW1hZ2VVcmwpO1xuICAgIHZhciBuZXdJdGVtID0gbmV3IEltYWdlRW5kcG9pbnRzKCk7XG4gICAgYXdhaXQgbmV3SXRlbS5hZGRJbWFnZShpbWFnZU5hbWUsIGltYWdlVXJsKVxuICAgIC8vIHJlcy5zZW5kKHJlc3ApO1xuICAgIC8vIHJlcy5lbmQoKTtcbiAgfSk7XG5cbnJvdXRlci5wb3N0KGAvdXBsb2FkYCwgdXBsb2FkLnNpbmdsZShcIkltYWdlUHJjXCIpICxhc3luYyBmdW5jdGlvbihcbiAgICByZXE6IGV4cHJlc3MuUmVxdWVzdCxcbiAgICByZXM6IGV4cHJlc3MuUmVzcG9uc2VcbiAgKSB7XG4gICAgcmVxLmZpbGVcbiAgICAvLyByZXMuc2VuZChcInJlc3BcIilcbiAgICAvLyByZXMuZW5kKCk7XG4gIH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiJdfQ==
