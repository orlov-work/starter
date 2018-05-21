#!/usr/bin/env node

import app from '../app';
import http from 'http';
import { getConfig, normalizePort } from '../utils';
import { logger } from '../helpers';

/**
 * Declare environment variables
 */
global.PRODUCTION_ENV = 'production';
global.DEVELOPMENT_ENV = 'development';
global.STAGING_ENV = 'staging';

const config = getConfig('app');
const port = normalizePort(process.env.PORT || config.PORT || '3003');

app.set('port', port);
app.set('env', process.env.NODE_ENV || global.DEVELOPMENT_ENV);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */
function onError (error) {
  if (error.syscall !== 'listen') throw error;

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break; // eslint-disable-line no-unreachable
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break; // eslint-disable-line no-unreachable
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening () {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe: ' + addr
    : 'port: ' + addr.port;

  logger.info(`Listening on ${bind}.`);
}

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
