import io from 'socket.io-client';
import readline from 'readline';

const prodHost = 'https://ws-chat-server.now.sh';
const host = process.env.HOST || 'http://127.0.0.1:3000';

console.log('host', host);

function addClient(name, emoji) {
    const socket = io(host);

    socket.emit('userInfo', { name, emoji });

    return socket;
}

function startTalking(socket) {
    setTimeout(() => {
        socket.emit('message', {
            text: `hey! I'm soooo ${Math.random().toString(36).substring(7)}`,
            timestamp: new Date().toISOString()
        });

        startTalking(socket);
    }, Math.round(Math.random() * 10e3));
}

const NUMBER_OF_CLIENTS = 100;

for(let i = 0; i < NUMBER_OF_CLIENTS; ++i) {
    startTalking(addClient(`client${i}`, `*${i}`));
}
