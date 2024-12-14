const http = require("http");
http.createServer(function(request,responce) {
    responce.end("Hello, node.js!")
}).listen(3000, "127.0.0.1"), function() {
    console.log("Сервер работает")
}
const os = require("os")
const username = os.userInfo().username
console.log(username)