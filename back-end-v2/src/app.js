import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';

import { getConfig, projectDir } from './utils';
import { logger, applyModules } from './helpers';

const app = express();
const config = getConfig('app logs');

app.set('x-powered-by', false);

logger.setLogLevel(process.env.LOG_LEVEL || 'info');

app.use(morgan(config.LOG_FORMAT, { stream: logger }));
app.use(bodyParser.json({ limit: config.JSON_LIMIT }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(projectDir, 'public')));

applyModules(app, 'api', 'v1');

export default app;
