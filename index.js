const fs = require('fs');
const path = require('path');
let serverConfig = {
  key: fs.readFileSync(path.join(__dirname, './config/credentials/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, './config/credentials/cert.pem')),
  // ca: fs.readFileSync(path.join(__dirname, './credentials/chain.pem'))
};
let app = require('./config/routes.js');
let server = require('https').createServer(serverConfig, app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('listening on ' + port);
});


