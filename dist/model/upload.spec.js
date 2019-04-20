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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2RlbC91cGxvYWQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFDbEMsZ0NBQWdDO0FBQ2hDLCtCQUErQjtBQUMvQiw0Q0FBNEM7QUFDNUMsOEJBQThCO0FBQzlCLHNDQUFzQztBQUV0Qyx3REFBd0Q7QUFDeEQsNkNBQTZDO0FBRTdDLGlDQUFpQztBQUNqQyxtREFBbUQ7QUFFbkQsVUFBVTtBQUVWLGdDQUFnQztBQUNoQyxpREFBaUQ7QUFDakQsVUFBVTtBQUVWLHNDQUFzQztBQUN0Qyw4QkFBOEI7QUFDOUIsc0dBQXNHO0FBQ3RHLCtFQUErRTtBQUMvRSxzQ0FBc0M7QUFDdEMsc0JBQXNCO0FBQ3RCLG1DQUFtQztBQUNuQyxnQ0FBZ0M7QUFDaEMseUJBQXlCO0FBRXpCLGNBQWM7QUFDZCxVQUFVO0FBRVYsNENBQTRDO0FBQzVDLDhCQUE4QjtBQUM5Qiw0Q0FBNEM7QUFDNUMsNkJBQTZCO0FBQzdCLDZDQUE2QztBQUM3QywrQkFBK0I7QUFDL0Isc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUIsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQixVQUFVO0FBRVYsMENBQTBDO0FBQzFDLDhCQUE4QjtBQUM5QixtRUFBbUU7QUFDbkUsZ0NBQWdDO0FBQ2hDLDhCQUE4QjtBQUU5QixzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixNQUFNIiwiZmlsZSI6Im1vZGVsL3VwbG9hZC5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgbW9jaGEgZnJvbSAnbW9jaGEnO1xuLy8gaW1wb3J0ICogYXMgY2hhaSBmcm9tICdjaGFpJztcbi8vIGltcG9ydCAqIGFzIFVVSUQgZnJvbSAndXVpZCdcbi8vIGltcG9ydCB7IEltYWdlSW5mb01vZGVsIH0gZnJvbSAnLi91cGxvYWQnXG4vLyBjb25zdCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcbi8vIHZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5cbi8vIGxldCB0ZXN0TW9kZWw6IEltYWdlSW5mb01vZGVsID0gbmV3IEltYWdlSW5mb01vZGVsKCk7XG4vLyBkZXNjcmliZSgnSW1hZ2UgdGVzdCBjYXNlcycsIGZ1bmN0aW9uICgpIHtcblxuLy8gICAgIGJlZm9yZShhc3luYyBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqQkVHSU4gVGVzdHMqKioqKioqXCIpO1xuXG4vLyAgICAgfSk7XG5cbi8vICAgICBhZnRlcihhc3luYyBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqRU5EIFRlc3RzKioqKioqKlwiKTtcbi8vICAgICB9KTtcblxuLy8gICAgIGl0KCdDb25uZWN0JywgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICAgICAgdGhpcy50aW1lb3V0KDUwMDApO1xuLy8gICAgICAgICBjb25zdCB1cmkgPSBcIm1vbmdvZGIrc3J2Oi8vZGV2OnF3ZXJ0eTEyM0BjbHVzdGVyMC02a2tqaS5tb25nb2RiLm5ldC90ZXN0P3JldHJ5V3JpdGVzPXRydWVcIjtcbi8vICAgICAgICAgbW9uZ29vc2UuY29ubmVjdCh1cmksIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB9KS50aGVuKGFzeW5jICgpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uZWN0ZWRcIilcbi8vICAgICAgICAgICAgIGRvbmUoKTtcbi8vICAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuLy8gICAgICAgICAgICAgZG9uZShlcnIpO1xuXG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgaXQoJ2RlZmluZSBzY2hlbWEnLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgICAgICB0aGlzLnRpbWVvdXQoNTAwMCk7XG4vLyAgICAgICAgIGxldCBtb2RlbCA9IG5ldyBJbWFnZUluZm9Nb2RlbCgpO1xuLy8gICAgICAgICB0ZXN0TW9kZWwgPSBtb2RlbDtcbi8vICAgICAgICAgbGV0IHByb21pc2UgPSBtb2RlbC5kZWZpbmVTY2hlbWEoKVxuLy8gICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuLy8gICAgICAgICAgICAgZG9uZSgpO1xuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4vLyAgICAgICAgICAgICAgICAgZG9uZShlcnIpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgfSk7XG5cbi8vICAgICBpdCgnSW5zZXJ0IERhdGEnLCBmdW5jdGlvbiAoZG9uZSkge1xuLy8gICAgICAgICB0aGlzLnRpbWVvdXQoNTAwMCk7XG4vLyAgICAgICAgIGxldCBwcm9taXNlID0gdGVzdE1vZGVsLmluc2VydERhdGEoIFwicm9zZVwiLCBcImltYWdlc3JjXCIpO1xuLy8gICAgICAgICBwcm9taXNlLnRoZW4oKHQpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHQpO1xuICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICBkb25lKCk7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbi8vICAgICAgICAgICAgICAgICBkb25lKGVycik7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICB9KTtcbi8vIH0pO1xuIl19
