const http = require('http');
const app = require('./app.js');

const server = http.createServer(app);
const port = process.env.APP_PORT || 4000;

server.listen(process.env.APP_PORT || 4000);