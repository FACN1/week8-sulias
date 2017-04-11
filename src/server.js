const hapi = require('hapi');
const vision = require('vision');
const routes = require('./routes/index.js');
const inert = require('inert');
const handlebars = require('handlebars');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 4000
});

server.register([inert, vision], (error) => {
  if (error) throw error;

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
