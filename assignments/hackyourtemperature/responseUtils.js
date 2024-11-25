export const sendResponse = (res, status, data = null, message = null) => {
    res.status(status).json({
      status: status < 400 ? 'success' : 'error',
      message: message || (status < 400 ? 'Success' : 'Error'),
      data,
    });
};