/* eslint-disable no-underscore-dangle */
const Express = require("express");
const timeout = require('connect-timeout');
const bodyParser = require("body-parser");
const boom = require("boom");

const errors = require("./app/errors");

const responseTimeMiddleware = require("./middlewares/responseTime");
const requestIdMiddleware = require("./middlewares/requestId");
const requestIpMiddleware = require("./middlewares/requestIp");
const errorsMiddleware = require("./middlewares/errors");
const jsonContentTypeMiddleware = require("./middlewares/jsonContentType");
const loggerMiddleware = require("./middlewares/logger");
const queriesCopyMiddleware = require("./middlewares/queriesCopy");

module.exports = ({ packageInfo, gerJs, logger }) => {
  const app = new Express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(loggerMiddleware({ logger }));
  app.use(responseTimeMiddleware());
  app.use(requestIdMiddleware());
  app.use(requestIpMiddleware());
  app.use(timeout(10000));
  app.use(jsonContentTypeMiddleware());
  app.use(queriesCopyMiddleware());
  app.use(gerJs.middleware());

  app
    .put("/users/:id", (req, res, next) => {
      console.log(req.params, req.query, req.body);
      res.send(Object.assign({}, req.params, req.query, req.body));
    })
    .post("/users", (req, res, next) => {
      console.log(req.params, req.query, req.body);
      res.send(Object.assign({}, req.params, req.query, req.body));
    })
    .get("/users", (req, res, next) => {
      console.log(req.params, req.query, req.body);
      res.send(Object.assign({}, req.params, req.query, req.body));
    })
    .get("/", (req, res, next) => {
      console.log(req.params, req.query, req.body);
      res.send();
    })
    .get("/swagger", gerJs.expose())
    .get("*", (req, res, next) => next(boom.notFound()))
  ;
  
  app.use(errorsMiddleware({ errors, logger }));
  
  return app;
};
