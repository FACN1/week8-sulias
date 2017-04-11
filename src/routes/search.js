const query = require('../queries/query.js');

const handler = (request, reply) => {
  const searchQuery = encodeURIComponent(request.query.search);
  query.searchFor(searchQuery, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    if (res.rows.length === 0) {
      const data = {
        title: 'FACN Hapi Members',
        description: 'An app which shows people involved in FACN1, where a user can see everyone involved, and add new people'
      };
      reply.view('noresult', data);
    } else {
      const data = {
        title: 'FACN Hapi Members',
        description: 'An app which shows people involved in FACN1, where a user can see everyone involved, and add new people',
        members: res.rows
      };
      reply.view('search', data);
    }
  });
};


const options = {
  method: 'GET',
  path: '/search/',
  handler
};


module.exports = options;
