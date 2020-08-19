const socketio = require('socket.io');
const io = socketio();

const socketApi = {  };
socketApi.io = io;

let arttırılan = 0;

io.on('connection', (socket) => {
    io.emit('UPDATE', { arttırılan });
    socket.on('CB1', () => {
        arttırılan += 1;
        io.emit('UPDATE', { arttırılan });
    });
});

module.exports = socketApi;