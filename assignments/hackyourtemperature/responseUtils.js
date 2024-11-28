export const sendResponse = (res, status, data = null, message = null) => {
    const statusMessage = status < 400 ? 'success' : 'error';
    res.status(status).json({
      status: statusMessage,
      message: message || statusMessage,
      data,
    });
};