const homeHandler = require('./home.js');
const staticHandler = require('./static.js');
const searchHandler = require('./search.js');
const addMemberHandler = require('./addMember.js');
const loginHandler = require('./login.js');
const welcomeHandler = require('./welcome.js');

module.exports = [
  homeHandler,
  staticHandler,
  addMemberHandler,
  searchHandler,
  loginHandler,
  welcomeHandler
];
