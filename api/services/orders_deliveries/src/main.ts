import { app } from './app';
import * as http from 'http';

import * as mongoose from 'mongoose';


const PORT = process.env.PORT || 7000;
const MONGO_URI = 'mongodb+srv://node:DL2NH58JeBnCYNlT@projet.7l1dz.mongodb.net/node?retryWrites=true&w=majority';
const server = http.createServer(app);



const io = require('socket.io')(server, {
    cors: {
		/*
	 origins: [
		 'http://localhost:8080',
		 'http://ceseat.fr',
		 'http://ceseat-delivery.fr',
		 'http://ceseat-restaurant.fr'
	],*/
		origins: ["*"],
      methods: ['GET', 'POST'],
    },
  });


  //Handle incoming data
io.on('connection', (socket: any) => {
	console.log(`Client connected [id=${socket.id}]`);

	


	//io.emit('notification', { text: "hi", time: new Date().toISOString() });
	
	socket.on('message', (data: any) => {
		console.log('message: ', JSON.stringify(data));
		io.emit('message', { text: data.msg, time: new Date().toISOString() });
	});

	socket.on('test', (data: any) => {
		console.log("get test")
		io.emit('needUpdate', { restaurantId: 5, type:"ORDER_UPDATE", time: new Date().toISOString() });
	});

	socket.on('disconnect', () => {
		console.log(`Client disconnected [id=${socket.id}]`);
	});
});

export {io}






server.listen(PORT);
server.on('listening', async () => {
	console.info(`Listening on port ${PORT}`);
	mongoose.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false});
	mongoose.connection.on('open', () => {
		console.info('Connected to Mongo');
	});
	mongoose.connection.on('error', (err: any) => {
		console.error(err);
	});
});