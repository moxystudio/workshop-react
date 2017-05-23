import { Server } from 'http';
import express from 'express';
import socketIO from 'socket.io';

const app = express();
const server = Server(app);
const io = socketIO(server);

const logger = {
    debug: console.log.bind(console, ''),
    event: (event, message) => console.log(`[${event}]` + (message ? `: ${message}` : '')),
    info: console.info.bind(console, '# ')
};

io.on('connection', socket => {
    let user = {};

    logger.event('connection');

    socket.on('userInfo', data => {
        logger.event('userInfo', `${data.name} ${data.emoji}`);

        user = data;
        socket.broadcast.emit('userConnected', user);
    });

    socket.on('message', data => {
        const message = { text: data.text, user };

        logger.event('message', `${user.emoji}  ${user.name}: ${data.text}`);

        socket.broadcast.emit('message', message);
    });

    socket.on('disconnect', () => {
        if (!user) {
            logger.event('user disconnect');

            return;
        }

        logger.event('disconnect', `${user.name} ${user.emoji}`);

        socket.broadcast.emit('userDisconnected', user);
    });
});


server.listen(3000, () => {
    logger.info('server started');
});
