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
  dbConnection.query('INSERT INTO github_users (id, username, name, avatar_url, location, access_token) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (id) DO UPDATE SET username=$2, name=$3, avatar_url=$4, location=$5, access_token=$6;', [user.id, user.username, user.name, user.avatar_url, user.location, user.access_token], cb);
};

const getGithubUser = (id, cb) => {
  dbConnection.query('SELECT * FROM github_users WHERE id=$1', [id], cb);
};

const addBlogPost = (post, cb) => {
  dbConnection.query('INSERT INTO blog (github_author_id, post, date) VALUES ($1, $2, $3)', [post.author_id, post.post_text, post.date], cb);
};

const getAllPosts = (cb) => {
  dbConnection.query('SELECT blog.github_author_id, github_users.username, blog.post, blog.date FROM blog INNER JOIN github_users ON blog.github_author_id=github_users.id', cb);
};

module.exports = {
  getAll,
  searchFor,
  addMember,
  addGithubUser,
  getGithubUser,
  addBlogPost,
  getAllPosts
};
