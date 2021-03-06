const bs = require('browser-sync').create()
const Static = require('node-static')
const file1 = new Static.Server('./customer')
const file2 = new Static.Server('./business')
const http = require('http')

http.createServer(function (request, response) {
  request.addListener('end', function () {
    file1.serve(request, response);
  }).resume();
}).listen(8081);

http.createServer(function (request, response) {
  request.addListener('end', function () {
    file2.serve(request, response);
  }).resume();
}).listen(8082);

bs.watch('./demo').on('change', bs.reload)
bs.init({
  server: './demo'
})
