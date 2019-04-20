const Express = require("express");
const app = Express();
var path = require('path');
var bodyParser = require('body-parser');
const indexRout = require("./router/index");
import * as mongoose from 'mongoose';

const uri = "mongodb+srv://dev:qwerty123@cluster0-6kkji.mongodb.net/test?retryWrites=true";

mongoose.connect(uri, {useNewUrlParser: true,}).then(async () => {
    console.log("conected");
}).catch((e) => {
    console.log(e); 
});

app.use('/', indexRout)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Express.static(path.join(__dirname, 'public')));

const port = 3000;

app.listen(port, () => console.log(`server started on port ${port}`))

module.exports = app