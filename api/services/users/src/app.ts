import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';

import './controller/user.controller';


import { requestLoggerMiddleware } from './request.logger.middleware';


import { RegisterRoutes } from './routes';

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use(requestLoggerMiddleware);
RegisterRoutes(app);



export { app };
