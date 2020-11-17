const express = require('express');
const socketIO = require('socket.io');
var http = require('http');

const path = require('path');
const { isContext } = require('vm');

const app = express();
let server = http.createServer(app);



const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;

module.exports.io = socketIO(server);
require('./sockets/main');






server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});