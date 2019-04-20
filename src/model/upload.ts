import { Document, Schema, SchemaTypes } from 'mongoose';
import * as mongoose from 'mongoose';
import * as UUID from 'uuid'
import * as  multer  from 'multer';

export interface IImageInfoDocuments extends Document {
    _id: string,
    imageName: string,
    imageSrc: string
}

export class ImageInfoModel {
    ImageModel: mongoose.Model<IImageInfoDocuments>;
    public async defineSchema(
    ) {
        try {
            this.ImageModel = mongoose.model<IImageInfoDocuments>('Imagedb', new Schema({
                _id: SchemaTypes.String
                , imageName: SchemaTypes.String
                , imageSrc: SchemaTypes.String
            }, { versionKey: false }));
        } catch (e) {
            throw e
        }
    }

    public async insertData(
        imageName: string
        , imageSrc: string
    ){
    console.log("mmmmmmmm", imageName, imageSrc);
        
        try {
            if (this.ImageModel != undefined) {
                await this.ImageModel.insertMany(
                    {
                        _id: UUID.v4()
                       , imageName: imageName
                       , imageSrc: imageSrc
                    });
            }
        } catch (error) {
            throw error;
        }
    }
}
