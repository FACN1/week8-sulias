const homeHandler = require('./home.js');
const staticHandler = require('./static.js');
const searchHandler = require('./search.js');
const addMemberHandler = require('./addMember.js');
const loginHandler = require('./login.js');
const welcomeHandler = require('./welcome.js');
const postsHandler = require('./posts.js');
const addPostHandler = require('./addPost.js');

module.exports = [
  homeHandler,
  staticHandler,
  addMemberHandler,
  searchHandler,
  loginHandler,
  welcomeHandler,
  postsHandler,
  addPostHandler
];
