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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250cm9sbGVyL3VwbG9hZC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQyxnQ0FBZ0M7QUFDaEMsK0JBQStCO0FBQy9CLDRDQUE0QztBQUM1Qyw4QkFBOEI7QUFDOUIsc0NBQXNDO0FBRXRDLHdEQUF3RDtBQUN4RCw2Q0FBNkM7QUFFN0MsaUNBQWlDO0FBQ2pDLG1EQUFtRDtBQUVuRCxVQUFVO0FBRVYsZ0NBQWdDO0FBQ2hDLGlEQUFpRDtBQUNqRCxVQUFVO0FBRVYsc0NBQXNDO0FBQ3RDLDJCQUEyQjtBQUMzQixzR0FBc0c7QUFDdEcsK0VBQStFO0FBQy9FLHNDQUFzQztBQUN0QyxzQkFBc0I7QUFDdEIsbUNBQW1DO0FBQ25DLGdDQUFnQztBQUNoQyx5QkFBeUI7QUFFekIsY0FBYztBQUNkLFVBQVU7QUFHVix3Q0FBd0M7QUFDeEMsMkJBQTJCO0FBQzNCLDZEQUE2RDtBQUM3RCxnQ0FBZ0M7QUFDaEMsOEJBQThCO0FBRTlCLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2IsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLE1BQU0iLCJmaWxlIjoiY29udHJvbGxlci91cGxvYWQuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAqIGFzIG1vY2hhIGZyb20gJ21vY2hhJztcbi8vIGltcG9ydCAqIGFzIGNoYWkgZnJvbSAnY2hhaSc7XG4vLyBpbXBvcnQgKiBhcyBVVUlEIGZyb20gJ3V1aWQnXG4vLyBpbXBvcnQgeyBJbWFnZUVuZHBvaW50cyB9IGZyb20gJy4vdXBsb2FkJ1xuLy8gY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG4vLyB2YXIgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuXG4vLyBsZXQgdGVzdE1vZGVsOiBJbWFnZUVuZHBvaW50cyA9IG5ldyBJbWFnZUVuZHBvaW50cygpO1xuLy8gZGVzY3JpYmUoJ2NvbnRyb2xsZXIgY2FzZXMnLCBmdW5jdGlvbiAoKSB7XG5cbi8vICAgICBiZWZvcmUoYXN5bmMgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKkJFR0lOIFRlc3RzKioqKioqKlwiKTtcblxuLy8gICAgIH0pO1xuXG4vLyAgICAgYWZ0ZXIoYXN5bmMgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKkVORCBUZXN0cyoqKioqKipcIik7XG4vLyAgICAgfSk7XG5cbi8vICAgICBpdCgnQ29ubmVjdCcsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgICAgIHRoaXMudGltZW91dCgwKTtcbi8vICAgICAgICAgY29uc3QgdXJpID0gXCJtb25nb2RiK3NydjovL2Rldjpxd2VydHkxMjNAY2x1c3RlcjAtNmtramkubW9uZ29kYi5uZXQvdGVzdD9yZXRyeVdyaXRlcz10cnVlXCI7XG4vLyAgICAgICAgIG1vbmdvb3NlLmNvbm5lY3QodXJpLCB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgfSkudGhlbihhc3luYyAoKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbmVjdGVkXCIpXG4vLyAgICAgICAgICAgICBkb25lKCk7XG4vLyAgICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbi8vICAgICAgICAgICAgIGRvbmUoZXJyKTtcblxuLy8gICAgICAgICB9KTtcbi8vICAgICB9KTtcblxuXG4vLyAgICAgaXQoJ2FkZCBpbWFnZScsIGZ1bmN0aW9uIChkb25lKSB7XG4vLyAgICAgICAgIHRoaXMudGltZW91dCgwKTtcbi8vICAgICAgICAgbGV0IHByb21pc2UgPSB0ZXN0TW9kZWwuYWRkSW1hZ2UoXCJtbW1tXCIsIFwieXl5eXl5XCIpXG4vLyAgICAgICAgIHByb21pc2UudGhlbigodCkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2codCk7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgICAgIGRvbmUoKTtcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGRvbmUoZXJyKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgIH0pO1xuLy8gfSk7XG4iXX0=
