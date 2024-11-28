import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export const httpStatus = StatusCodes;
  
export const messages = {
    BAD_REQUEST: ReasonPhrases.BAD_REQUEST,
    NOT_FOUND: ReasonPhrases.NOT_FOUND,
    SERVER_ERROR: ReasonPhrases.INTERNAL_SERVER_ERROR,
    SUCCESS: 'Request successful',
};