// import * as mocha from 'mocha';
// import * as chai from 'chai';
// import * as UUID from 'uuid'
// import { ImageInfoModel } from './upload'
// const expect = chai.expect;
// var mongoose = require('mongoose');

// let testModel: ImageInfoModel = new ImageInfoModel();
// describe('Image test cases', function () {

//     before(async function () {
//         console.log("******BEGIN Tests*******");

//     });

//     after(async function () {
//         console.log("******END Tests*******");
//     });

//     it('Connect', function (done) {
//         this.timeout(5000);
//         const uri = "mongodb+srv://dev:qwerty123@cluster0-6kkji.mongodb.net/test?retryWrites=true";
//         mongoose.connect(uri, { useNewUrlParser: true, }).then(async () => {
//             console.log("conected")
//             done();
//         }).catch((err: any) => {
//             console.log(err);
//             done(err);

//         });
//     });

//     it('define schema', function (done) {
//         this.timeout(5000);
//         let model = new ImageInfoModel();
//         testModel = model;
//         let promise = model.defineSchema()
//         promise.then(() => {
//             done();
//         })
//             .catch(err => {
//                 done(err);
//             });
//     });

//     it('Insert Data', function (done) {
//         this.timeout(5000);
//         let promise = testModel.insertData( "rose", "imagesrc");
//         promise.then((t) => {
//             console.log(t);
            
//             done();
//         })
//             .catch(err => {
//                 done(err);
//             });
//     });
// });
