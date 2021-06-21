import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';

import './controller/product.controller';
import './controller/menu.controller';


import { requestLoggerMiddleware } from './request.logger.middleware';


import { RegisterRoutes } from './routes';
import * as swaggerUi from 'swagger-ui-express';

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use(requestLoggerMiddleware);
RegisterRoutes(app);


try {
    const swaggerDocument = require('../swagger.json');
    
    app.get('/swagger',(req, res) => {
        res.json(swaggerDocument);
    });

	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
	console.error('Unable to read swagger.json', err);
}




export { app };
