import { ImageInfoModel } from "../model/upload"

export class ImageEndpoints {
    public async addImage(
      imageName: string
      , imageUrl: string
    ){
    console.log("mmmmmmmm", imageName, imageUrl);

      if (!imageName || !imageUrl) {
        console.log("Invalid firstName, mobileNo , emailId ");
      }
  
      try {
       let imageInfoModel = new ImageInfoModel()
       await imageInfoModel.defineSchema()
       await imageInfoModel.insertData(imageName, imageUrl)
      } catch (e) {
       throw e;
      }
    }
  }
  