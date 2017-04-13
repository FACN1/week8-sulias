const qs = require('querystring');
require('env2')('./config.env');

module.exports = {
  method: 'GET',
  path: '/login',
  handler: (request, reply) => {
    const params = {
      client_id: process.env.CLIENT_ID,
      redirect_uri: 'https://sulias.herokuapp.com/welcome'
    };
    reply.redirect(`https://github.com/login/oauth/authorize?${qs.stringify(params)}`);
  }
};
