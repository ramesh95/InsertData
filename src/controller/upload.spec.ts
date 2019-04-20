// import * as mocha from 'mocha';
// import * as chai from 'chai';
// import * as UUID from 'uuid'
// import { ImageEndpoints } from './upload'
// const expect = chai.expect;
// var mongoose = require('mongoose');

// let testModel: ImageEndpoints = new ImageEndpoints();
// describe('controller cases', function () {

//     before(async function () {
//         console.log("******BEGIN Tests*******");

//     });

//     after(async function () {
//         console.log("******END Tests*******");
//     });

//     it('Connect', function (done) {
//         this.timeout(0);
//         const uri = "mongodb+srv://dev:qwerty123@cluster0-6kkji.mongodb.net/test?retryWrites=true";
//         mongoose.connect(uri, { useNewUrlParser: true, }).then(async () => {
//             console.log("conected")
//             done();
//         }).catch((err: any) => {
//             console.log(err);
//             done(err);

//         });
//     });


//     it('add image', function (done) {
//         this.timeout(0);
//         let promise = testModel.addImage("mmmm", "yyyyyy")
//         promise.then((t) => {
//             console.log(t);
            
//             done();
//         })
//             .catch(err => {
//                 done(err);
//             });
//     });
// });
