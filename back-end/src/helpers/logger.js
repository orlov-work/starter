import { winston as winstonConf } from 'config';
import winston from 'winston';
import 'winston-daily-rotate-file';

const {
  dirname,
  datePattern,
  filename,
  maxSize,
  maxFiles
} = winstonConf;

const fileTransport = new (winston.transports.DailyRotateFile)({
  dirname,
  filename,
  datePattern,
  maxSize,
  maxFiles
});

const logger = new winston.Logger({
  transports: [
    fileTransport,
    new winston.transports.Console({
      json: false,
      timestamp: true,
      handleExceptions: true,
      colorize: true
    })
  ],
  exitOnError: false
});

/**
 * Basic logging function. Logs the message with specified level
 * @param level
 * @param message
 * @param additional
 */
const log = (level, message, additional) => {
  if (additional !== undefined) {
    logger.log(level, message, additional);
  } else {
    logger.log(level, message);
  }
};

/**
 * Logs the message with DEBUG level
 * @param message
 * @param additional
 */
const debug = (message, additional) => {
  if (additional !== undefined) {
    log('debug', message, additional);
  } else {
    log('debug', message);
  }
};

/**
 * Logs the message with INFO level
 * @param message
 * @param additional
 */
const info = (message, additional) => {
  if (additional !== undefined) {
    log('info', message, additional);
  } else {
    log('info', message);
  }
};

/**
 * Logs the message with WARNING level
 * @param message
 * @param additional
 */
const warn = (message, additional) => {
  if (additional !== undefined) {
    log('warn', message, additional);
  } else {
    log('warn', message);
  }
};

/**
 * Logs the message with ERROR level
 * @param message
 * @param additional
 */
const error = (message, additional) => {
  if (additional !== undefined) {
    log('error', message, additional);
  } else {
    log('error', message);
  }
};

/**
 * Logs the message with INFO level
 * @param message
 */
const write = message => info(message);

/**
 * Set the logging level
 * @param level
 */
const setLogLevel = level => {
  info(`Setting log level to ( ${level} )`);
  if (['debug', 'info', 'warn', 'error'].indexOf(level.toLowerCase().trim()) >= 0) {
    logger.level = level;
  } else {
    logger.level = 'debug';
    warn(`Setting log level: Log level '${level}' is not available. Setting to debug`);
  }
};

module.exports = {
  logger,
  info,
  warn,
  debug,
  error,
  setLogLevel,
  write
};