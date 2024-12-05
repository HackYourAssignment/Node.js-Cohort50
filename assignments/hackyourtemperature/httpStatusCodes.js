const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const httpStatus = StatusCodes;

const messages = {
    BAD_REQUEST: ReasonPhrases.BAD_REQUEST,
    NOT_FOUND: ReasonPhrases.NOT_FOUND,
    SERVER_ERROR: ReasonPhrases.INTERNAL_SERVER_ERROR,
    SUCCESS: 'Request successful',
};

module.exports = { httpStatus, messages };
