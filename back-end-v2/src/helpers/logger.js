import winston from 'winston';
import 'winston-daily-rotate-file';
import getConfig from '../utils/getConfig';
import projectDir from '../utils/projectDir';

const {
  DIRECTORY,
  FILE_NAME,
  DATE_PATTERN,
  MAX_SIZE,
  CLEAR_EACH
} = getConfig('logs');

const fileTransport = new (winston.transports.DailyRotateFile)({
  dirname: `${projectDir}/${DIRECTORY}`,
  filename: FILE_NAME,
  datePattern: DATE_PATTERN,
  maxSize: MAX_SIZE,
  maxFiles: CLEAR_EACH
});

const logger = new winston.Logger({
  transports: [
    fileTransport
    // new winston.transports.Console({
    //   json: false,
    //   timestamp: true,
    //   handleExceptions: true,
    //   colorize: true
    // })
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

export default {
  logger,
  info,
  warn,
  debug,
  error,
  setLogLevel,
  write
};
