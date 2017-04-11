const server = require('./server.js');

server.start((error) => {
  if (error) throw error;
  console.log(`Be made Hapi at: ${server.info.uri}`);
});
