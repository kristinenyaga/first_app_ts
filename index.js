"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
// axios is async
axios_1.default.get(url) //receive a promise
    .then(function (response) {
    console.log(response.data);
});
