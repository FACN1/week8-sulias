const dbConnection = require('../../database/db_connection.js');


const getAll = (cb) => {
  dbConnection.query('SELECT name, position, location, description, languages FROM members ', cb);
};

const searchFor = (search, cb) => {
  const searchTerm = `%${search}%`;
  dbConnection.query(
    'SELECT name, position, location, description, languages FROM members WHERE name ILIKE $1 OR position ILIKE $1 OR location ILIKE $1 OR description ILIKE $1 OR languages ILIKE $1;', [searchTerm], cb);
};


const addMember = (member, cb) => {
  dbConnection.query('INSERT INTO members (name, position, location, description, languages) VALUES ($1, $2, $3, $4, $5)', [member.name, member.position, member.location, member.description, member.languages], cb);
};

const addGithubUser = (user, cb) => {
  dbConnection.query('INSERT INTO github_users (username, name, avatar_url, location, access_token) VALUES ($1, $2, $3, $4, $5)', [user.username, user.name, user.avatar_url, user.location, user.access_token], cb);
};

const getGithubUser = (username, cb) => {
  dbConnection.query('SELECT * FROM github_users WHERE username=$1', [username], cb);
};

module.exports = { getAll, searchFor, addMember, addGithubUser, getGithubUser };
