const hapi = require('hapi');
const vision = require('vision');
const routes = require('./routes/index.js');
const inert = require('inert');
const handlebars = require('handlebars');
const jwt = require('hapi-auth-jwt2');
const query = require('./queries/query.js');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 4000
});

server.connections = {
  state: {
    isSameSite: 'Lax'
  }
};

function validate(token, request, callback) {
  query.getGithubUser(token.user.id, (err, res) => {
    if (err) {
      console.log(err);
      return callback(null, false);
    }
    if (res.rows[0].id === token.user.id) {
      return callback(null, true);
    }
    return callback(null, false);
  });
}

server.register([inert, vision, jwt], (error) => {
  if (error) throw error;

  server.auth.strategy('jwt', 'jwt', {
    key: process.env.SECRET,
    validateFunc: validate,
    verifyOptions: { algorithms: ['HS256'] }
  });

  server.views({
    engines: {
      hbs: handlebars
    },
    relativeTo: __dirname,
    path: 'views',
    helpersPath: 'views/helpers',
    partialsPath: 'views/partials',
    layoutPath: 'views/layout',
    layout: 'default'
  });
  server.route(routes);
});

module.exports = server;
