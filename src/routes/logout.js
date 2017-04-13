require('env2')('./config.env');

module.exports = {
  method: 'GET',
  path: '/logout',
  handler: (request, reply) => reply.redirect('/')
            .state('token', null, {
              path: '/',
              isHttpOnly: false,
              isSecure: process.env.NODE_ENV === 'PRODUCTION'
            })
};
