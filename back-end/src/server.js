import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {
  port,
  winston as winstonConf,
  morgan as morganConf
} from 'config';
import { initControllers } from './controllers';
import middlewares from './middlewares';
import './models';
import logger from './helpers/logger';

const {
  identityMiddleware,
  notFoundMiddleware,
  errorMiddleware
} = middlewares;

const app = express();
const router = express.Router();

logger.setLogLevel(winstonConf.logLevel);
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

app.use(morgan(morganConf.logFormat, { stream: logger }));
app.use(identityMiddleware);
app.use(router);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

initControllers(router);

app.listen(port, () => logger.info('Server start on port: ', port));
