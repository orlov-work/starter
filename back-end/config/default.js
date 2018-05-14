import projectDir from '../src/helpers/projectDir';

const { PORT, LOG_LEVEL } = process.env;

module.exports = {
  port: PORT || '3000',
  winston: {
    logLevel: LOG_LEVEL || 'info',
    dirname: `${projectDir}/log`,
    filename: '%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '5m',
    maxFiles: '14d'
  },
  morgan: {
    logFormat: ' -- :method :remote-addr :url :status :res[content-length] - :response-time ms'
  }
};
