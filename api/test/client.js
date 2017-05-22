import io from 'socket.io-client';
import readline from 'readline';

const prodHost = 'https://workshop-chat-server-zzbrwyrtcc.now.sh';
const host = process.env.HOST || 'http://127.0.0.1:3000';

console.log('host', host);

const socket = io(host);
const read = readline.createInterface({
    input: process.stdin,
    // output: process.stdout
});

const user = { name: 'jon', emoji: '🐻' };

console.info('# client chat started');

function readMessage() {
    read.question('', message => {
        socket.emit('message', {
            user,
            text: message,
            timestamp: new Date().toISOString()
        });

        readMessage();
    });
}

function startChat() {
    console.log('# entered chat');

    readMessage();

    socket.on('message', data => {
        console.log(`${data.user.emoji}  ${data.user.name}: ${data.text}`);
    });

    socket.on('userConnected', user => {
        console.log(`# user ${user.name} connected`);
    })
    socket.on('userDisconnected', user => {
        console.log(`# user ${user.name} disconnected`);
    })
}

read.question('username: ', username => {
    read.question('emoji: ', emoji => {
        user.name = username;
        user.emoji = emoji;

        socket.emit('userInfo', user);

        startChat();
    });
});
