const request = require('request');
require('env2')('./config.env');
const url = require('url');
const qs = require('querystring');
const jwt = require('jsonwebtoken');

module.exports = {
  method: 'GET',
  path: '/welcome',
  handler: (req, rep) => {
    const parsedUrl = url.parse(req.url);

    const sendAuth = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: parsedUrl.query.code
    };

    const options = {
      url: 'https://github.com/login/oauth/access_token',
      method: 'POST',
      body: qs.stringify(sendAuth)
    };
    request(options, (error, response, body) => {
      if (error) {
        rep('internal server error').code(500);
      }
      const responseBody = qs.parse(body);

      if (responseBody.access_token) {
        const githubUrl = 'https://api.github.com/user';

        const header = {
          'User-Agent': 'oauth_github_jwt',
          Authorization: `token ${responseBody.access_token}`
        };
        request({
          method: 'GET',
          url: githubUrl,
          headers: header
        },
        (errorGet, responseGet, bodyGet) => {
          if (errorGet) {
            console.log(error);
            rep(500).error(500);
            return;
          }

          const optionsGet = {
            expiresIn: Date.now() + (24 * 60 * 60 * 1000),
            subject: 'github-data'
          };
          const payload = {
            user: {
              username: JSON.parse(bodyGet).login,
              img_url: JSON.parse(bodyGet).avatar_url
            },
            accessToken: responseBody.access_token
          };
          jwt.sign(payload, process.env.SECRET, optionsGet, (err, token) => {
            rep.redirect('/post')
          .state('token', token, {
            path: '/',
            isHttpOnly: false,
            isSecure: process.env.NODE_ENV === 'PRODUCTION'
          });
          });
        });
      } else {
        rep('Access denied');
      }
      console.log('body:', qs.parse(body));
    });
  }
};
