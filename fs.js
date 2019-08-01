const http = require("http");
const fs= require('fs');

http.createServer(function (req, res) {
  fs.readFile('abc.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);


//questions
// can we use pdf mime?
//how can we use fs in express?