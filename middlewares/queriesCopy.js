module.exports = () => (req, res, next) => {
  req.queries = Object.assign({}, req.query);
  next();
};
