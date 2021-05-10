const net = require('net');

const server = net.createServer(socket => {
    socket.write('Hallo TCP/IP');

    socket.end();
}).listen(3000);