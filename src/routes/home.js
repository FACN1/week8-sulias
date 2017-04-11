const query = require('../queries/query.js');

const handler = (request, reply) =>{

  query.getAll((err,res) => {
    if(err) {
      console.log(err);
      return reply('Internal server error').code(500);
    }
    let data = {
      title: 'FACN Hapi Members',
      description: 'An app which shows people involved in FACN1, where a user can see everyone involved, and add new people',
      members: res.rows
    }
    reply.view('index', data);
  })
};

const options = {
  method: 'GET',
  path: '/',
  handler: handler
};

module.exports = options;
