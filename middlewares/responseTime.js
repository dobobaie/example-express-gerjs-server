module.exports = () => (req, res, next) => {
  req.time_requested = new Date();
  // console.log("responsetime", res.send.toString());
  res._sendByResponseTimeMiddleware = res.send;
  res.send = function(data) {
    const ms = new Date() - req.time_requested;
    res.setHeader("X-Response-Time", ms);
    res._sendByResponseTimeMiddleware(data);
    return this;
  };
  next();
};
