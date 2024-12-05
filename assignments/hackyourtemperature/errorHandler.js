const { httpStatus, messages } = require('./httpStatusCodes');

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).json({
        status: 'error',
        error: {
            code: err.status || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || messages.SERVER_ERROR,
        },
    });
};

module.exports = { errorHandler };
