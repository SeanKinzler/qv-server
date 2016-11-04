var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var serverConfig = {
  key: fs.readFileSync(path.join(__dirname, './config/credentials/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, './config/credentials/cert.pem')),
  // ca: fs.readFileSync(path.join(__dirname, './credentials/chain.pem'))
};

var server = require('https').createServer(serverConfig, require());
app.use(bodyParser());


const port = process.env.PORT || 8080;
server.listen(port);


