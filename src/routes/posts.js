const query = require('../queries/query.js');

const handler = (request, reply) => {
  if (request.auth.isAuthenticated) {
    return query.getAllPosts((err, res) => {
      if (err) {
        console.log(err);
        return reply('Internal server error').code(500);
      }
      const data = {
        title: 'FACN Hapi Members',
        description: 'An app which shows people involved in FACN1, where a user can see everyone involved, and add new people',
        posts: res.rows,
        username: request.auth.credentials.user.username,
        avatar_url: request.auth.credentials.user.img_url
      };
      return reply.view('posts', data);
    });
  }
  const data = {
    title: 'FACN Hapi Members',
    description: 'An app which shows people involved in FACN1, where a user can see everyone involved, and add new people'
  };
  return reply.view('login', data);
};

const options = {
  method: 'GET',
  path: '/blog/posts',
  config: {
    auth: {
      mode: 'optional',
      strategy: 'jwt'
    }
  },
  handler
};

module.exports = options;
