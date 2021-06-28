import { app } from './app';
import * as http from 'http';
import { createConnection } from "typeorm";



const PORT = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(PORT);
server.on('listening', async () => {
	console.info(`Listening on port ${PORT}`);
	try {
		await createConnection();
	} catch (error) {
		console.error(error);
	}
});