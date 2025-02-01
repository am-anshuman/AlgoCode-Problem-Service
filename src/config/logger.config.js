const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');

const allowedTransports = [];
allowedTransports.push(new winston.transports.Console({ // ensures that console based logging is configured
    // console formatting
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

allowedTransports.push(new winston.transports.MongoDB({ // Mongodb based logging is configured
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs'
}));

allowedTransports.push(new winston.transports.File({ // File based logging is configured
    filename: 'app.log'
}))

const logger = winston.createLogger({
    // default formatting
    format: winston.format.combine(
        // first arg to the combine method is defining how we want the timestamp to be like
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:MM:ss'
        }),
        // second arg defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransports
});

module.exports = logger;