module.exports = ({ logger }) => (req, res, next) => {
  res._sendByLoggerMiddleware = res.send;
  res.send = function(data) {
    logger(`info`)({
      date: new Date(),
      event: `${req.method.toUpperCase()} ${req.url}`,
      payload: req.body,
      request_id: res.get("X-Request-Id"),
      response_time: res.get("X-Response-Time"),
      query: req.query,
      headers: req.headers,
      body: data,
      status: res.statusCode,
      auth: req.auth || null
    });
    res._sendByLoggerMiddleware(data);
    return this;
  };
  next();
};
