const Boom = require("boom");
const snakeCase = require("snake-case");

module.exports = ({ errors, logger }) => (error, req, res, next) => {
  const local_error = Object.assign(error, {
    message: snakeCase(error.message)
  });
  const berror =
    local_error && local_error.isBoom
      ? local_error
      : Boom[errors[local_error.message] || "badImplementation"](local_error);
  if (logger) {
    logger("error")({
      event: `${berror.output.statusCode} - ${berror.output.payload.message}`,
      stack: berror.stack,
      output: berror.output,
      data: berror.data || null
    });
  }
  const { payload } = berror.output;
  const message = snakeCase((payload.message || payload.error).toString());
  res.status(payload.statusCode).json({ errors: [{ code: message }] });
};
