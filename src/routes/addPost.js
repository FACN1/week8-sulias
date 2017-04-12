const query = require('../queries/query.js');
const Joi = require('joi');

const handler = (request, reply) => {
  if (request.auth.isAuthenticated) {
    const post = {
      author_id: request.auth.credentials.user.id,
      post_text: request.payload.post_text,
      date: Math.round((new Date()).getTime() / 1000)
    };
    query.addBlogPost(post, (err) => {
      if (err) {
        console.log(err);
      }
    });
    return reply.redirect('/blog/posts');
  }
  const data = {
    title: 'FACN Hapi Members',
    description: 'An app which shows people involved in FACN1, where a user can see everyone involved, and add new people'
  };
  return reply.view('login', data);
};

const options = {
  method: 'POST',
  path: '/blog/add-post',
  handler,
  config: {
    validate: {
      payload: {
        post_text: Joi.string().max(10000).required()
      }
    },
    auth: {
      mode: 'optional',
      strategy: 'jwt'
    }
  }
};

module.exports = options;
