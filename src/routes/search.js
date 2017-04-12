const query = require('../queries/query.js');

const handler = (request, reply) => {
  if (request.auth.isAuthenticated) {
    const searchQuery = encodeURIComponent(request.query.search);
    return query.searchFor(searchQuery, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      const data = {
        title: 'FACN Hapi Members',
        description: 'An app which shows people involved in FACN1, where a user can see everyone involved, and add new people',
        username: request.auth.credentials.user.username,
        avatar_url: request.auth.credentials.user.img_url
      };
      if (res.rows.length === 0) {
        reply.view('noresult', data);
      } else {
        data.members = res.rows;
        reply.view('search', data);
      }
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
  path: '/search/',
  config: {
    auth: {
      mode: 'optional',
      strategy: 'jwt'
    }
  },
  handler
};


module.exports = options;
