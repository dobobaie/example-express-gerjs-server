# Example [express-gerjs](https://github.com/dobobaie/express-gerjs) server

Example of express-getjs in situation  
Generate and expose Swagger documentation + validation input + format data output with joi models  

## How use [express-gerjs](https://github.com/dobobaie/express-gerjs) ?  

One instance, one middleware, one expose and models. Simple.  
Check [`express-gerjs`](https://github.com/dobobaie/express-gerjs) instance in [index.js#L19](https://github.com/dobobaie/example-express-gerjs-server/blob/master/index.js#L19) file => Generate Swagger documentation  
Check [`express-gerjs`](https://github.com/dobobaie/express-gerjs) middleware declaration in [server.js#L33](https://github.com/dobobaie/example-express-gerjs-server/blob/master/server.js#L33) file => Validation + Formatage input/output payload  
Check [`express-gerjs`](https://github.com/dobobaie/express-gerjs) swagger expose in [server.js#L52](https://github.com/dobobaie/example-express-gerjs-server/blob/master/server.js#L52) file => Expose Swagger documentation  
Finally check [`gerjs`](https://github.com/dobobaie/gerjs) models in [models/models.js](https://github.com/dobobaie/example-express-gerjs-server/blob/master/models/models.js) file => Joi models required   

## Note

To create a Joi model is very simple, you have simply to create a Joi schema  

## Demo

example-express-gerjs-server [live](http://164.132.106.118:9292/)   
example-express-gerjs-server [live in /swagger](http://164.132.106.118:9292/swagger)   
