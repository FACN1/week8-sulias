const query = require('../queries/query.js');
const Joi = require('joi');

const handler = (request, reply) => {
  if (request.auth.isAuthenticated) {
    return query.addMember(request.payload, (err) => {
      if (err) {
        console.log(err);
      }
      reply.redirect('/');
    });
  }
  const data = {
    title: 'FACN Hapi Members',
    description: 'An app which shows people involved in FACN1, where a user can see everyone involved, and add new people'
  };
  return reply.view('login', data);
};

const options = {
  method: 'POST',
  path: '/add-member',
  handler,
  config: {
    validate: {
      payload: {
        name: Joi.string().alphanum().required(),
        position: Joi.string().required(),
        location: Joi.string().required(),
        description: Joi.string().required(),
        languages: Joi.string().required()
      }
    },
    auth: {
      mode: 'optional',
      strategy: 'jwt'
    }
  }
};

module.exports = options;
