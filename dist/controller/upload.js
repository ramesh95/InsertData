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
const upload_1 = require("../model/upload");
class ImageEndpoints {
    addImage(imageName, imageUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("mmmmmmmm", imageName, imageUrl);
            if (!imageName || !imageUrl) {
                console.log("Invalid firstName, mobileNo , emailId ");
            }
            try {
                let imageInfoModel = new upload_1.ImageInfoModel();
                yield imageInfoModel.defineSchema();
                yield imageInfoModel.insertData(imageName, imageUrl);
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.ImageEndpoints = ImageEndpoints;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250cm9sbGVyL3VwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNENBQWdEO0FBRWhELE1BQWEsY0FBYztJQUNWLFFBQVEsQ0FDbkIsU0FBaUIsRUFDZixRQUFnQjs7WUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTNDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQzthQUN2RDtZQUVELElBQUk7Z0JBQ0gsSUFBSSxjQUFjLEdBQUcsSUFBSSx1QkFBYyxFQUFFLENBQUE7Z0JBQ3pDLE1BQU0sY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFBO2dCQUNuQyxNQUFNLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFBO2FBQ3BEO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxDQUFDLENBQUM7YUFDUjtRQUNILENBQUM7S0FBQTtDQUNGO0FBbkJILHdDQW1CRyIsImZpbGUiOiJjb250cm9sbGVyL3VwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlSW5mb01vZGVsIH0gZnJvbSBcIi4uL21vZGVsL3VwbG9hZFwiXG5cbmV4cG9ydCBjbGFzcyBJbWFnZUVuZHBvaW50cyB7XG4gICAgcHVibGljIGFzeW5jIGFkZEltYWdlKFxuICAgICAgaW1hZ2VOYW1lOiBzdHJpbmdcbiAgICAgICwgaW1hZ2VVcmw6IHN0cmluZ1xuICAgICl7XG4gICAgY29uc29sZS5sb2coXCJtbW1tbW1tbVwiLCBpbWFnZU5hbWUsIGltYWdlVXJsKTtcblxuICAgICAgaWYgKCFpbWFnZU5hbWUgfHwgIWltYWdlVXJsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBmaXJzdE5hbWUsIG1vYmlsZU5vICwgZW1haWxJZCBcIik7XG4gICAgICB9XG4gIFxuICAgICAgdHJ5IHtcbiAgICAgICBsZXQgaW1hZ2VJbmZvTW9kZWwgPSBuZXcgSW1hZ2VJbmZvTW9kZWwoKVxuICAgICAgIGF3YWl0IGltYWdlSW5mb01vZGVsLmRlZmluZVNjaGVtYSgpXG4gICAgICAgYXdhaXQgaW1hZ2VJbmZvTW9kZWwuaW5zZXJ0RGF0YShpbWFnZU5hbWUsIGltYWdlVXJsKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ==
