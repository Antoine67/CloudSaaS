import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';

import './controller/product.controller';


import { requestLoggerMiddleware } from './request.logger.middleware';


import { RegisterRoutes } from './routes';
import * as swaggerUi from 'swagger-ui-express';

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use(requestLoggerMiddleware);
RegisterRoutes(app);


export { app };
