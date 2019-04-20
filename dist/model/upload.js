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
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
const UUID = require("uuid");
class ImageInfoModel {
    defineSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.ImageModel = mongoose.model('Imagedb', new mongoose_1.Schema({
                    _id: mongoose_1.SchemaTypes.String,
                    imageName: mongoose_1.SchemaTypes.String,
                    imageSrc: mongoose_1.SchemaTypes.String
                }, { versionKey: false }));
            }
            catch (e) {
                throw e;
            }
        });
    }
    insertData(imageName, imageSrc) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("mmmmmmmm", imageName, imageSrc);
            try {
                if (this.ImageModel != undefined) {
                    yield this.ImageModel.insertMany({
                        _id: UUID.v4(),
                        imageName: imageName,
                        imageSrc: imageSrc
                    });
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.ImageInfoModel = ImageInfoModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2RlbC91cGxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF5RDtBQUN6RCxxQ0FBcUM7QUFDckMsNkJBQTRCO0FBUzVCLE1BQWEsY0FBYztJQUVWLFlBQVk7O1lBRXJCLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFzQixTQUFTLEVBQUUsSUFBSSxpQkFBTSxDQUFDO29CQUN4RSxHQUFHLEVBQUUsc0JBQVcsQ0FBQyxNQUFNO29CQUNyQixTQUFTLEVBQUUsc0JBQVcsQ0FBQyxNQUFNO29CQUM3QixRQUFRLEVBQUUsc0JBQVcsQ0FBQyxNQUFNO2lCQUNqQyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM5QjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxDQUFBO2FBQ1Y7UUFDTCxDQUFDO0tBQUE7SUFFWSxVQUFVLENBQ25CLFNBQWlCLEVBQ2YsUUFBZ0I7O1lBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUV6QyxJQUFJO2dCQUNBLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUU7b0JBQzlCLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQzVCO3dCQUNJLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO3dCQUNiLFNBQVMsRUFBRSxTQUFTO3dCQUNwQixRQUFRLEVBQUUsUUFBUTtxQkFDdEIsQ0FBQyxDQUFDO2lCQUNWO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixNQUFNLEtBQUssQ0FBQzthQUNmO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFsQ0Qsd0NBa0NDIiwiZmlsZSI6Im1vZGVsL3VwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50LCBTY2hlbWEsIFNjaGVtYVR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0ICogYXMgVVVJRCBmcm9tICd1dWlkJ1xuaW1wb3J0ICogYXMgIG11bHRlciAgZnJvbSAnbXVsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VJbmZvRG9jdW1lbnRzIGV4dGVuZHMgRG9jdW1lbnQge1xuICAgIF9pZDogc3RyaW5nLFxuICAgIGltYWdlTmFtZTogc3RyaW5nLFxuICAgIGltYWdlU3JjOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlSW5mb01vZGVsIHtcbiAgICBJbWFnZU1vZGVsOiBtb25nb29zZS5Nb2RlbDxJSW1hZ2VJbmZvRG9jdW1lbnRzPjtcbiAgICBwdWJsaWMgYXN5bmMgZGVmaW5lU2NoZW1hKFxuICAgICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5JbWFnZU1vZGVsID0gbW9uZ29vc2UubW9kZWw8SUltYWdlSW5mb0RvY3VtZW50cz4oJ0ltYWdlZGInLCBuZXcgU2NoZW1hKHtcbiAgICAgICAgICAgICAgICBfaWQ6IFNjaGVtYVR5cGVzLlN0cmluZ1xuICAgICAgICAgICAgICAgICwgaW1hZ2VOYW1lOiBTY2hlbWFUeXBlcy5TdHJpbmdcbiAgICAgICAgICAgICAgICAsIGltYWdlU3JjOiBTY2hlbWFUeXBlcy5TdHJpbmdcbiAgICAgICAgICAgIH0sIHsgdmVyc2lvbktleTogZmFsc2UgfSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5zZXJ0RGF0YShcbiAgICAgICAgaW1hZ2VOYW1lOiBzdHJpbmdcbiAgICAgICAgLCBpbWFnZVNyYzogc3RyaW5nXG4gICAgKXtcbiAgICBjb25zb2xlLmxvZyhcIm1tbW1tbW1tXCIsIGltYWdlTmFtZSwgaW1hZ2VTcmMpO1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLkltYWdlTW9kZWwgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5JbWFnZU1vZGVsLmluc2VydE1hbnkoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogVVVJRC52NCgpXG4gICAgICAgICAgICAgICAgICAgICAgICwgaW1hZ2VOYW1lOiBpbWFnZU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgLCBpbWFnZVNyYzogaW1hZ2VTcmNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
