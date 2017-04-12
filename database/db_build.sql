BEGIN;

DROP TABLE IF EXISTS members, votes, blog, github_users cascade;

CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(100) NOT NULL,
  location VARCHAR(100),
  description TEXT,
  languages TEXT
);

CREATE TABLE github_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  avatar_url VARCHAR(255),
  location VARCHAR(100),
  access_token VARCHAR(255)
);

CREATE TABLE votes (
  id SERIAL PRIMARY KEY,
  member_id INTEGER references members (id) NOT NULL,
  num_votes INTEGER
);

CREATE TABLE blog (
  id SERIAL PRIMARY KEY,
  author_id INTEGER references members (id) NOT NULL,
  post TEXT,
  date INTEGER
);

-- INSERT INTO blog (author_id, post) VALUES (1, 'Hapi World');


INSERT INTO members (name, position, location, description, languages)
VALUES ('macintoshhelper', 'student', 'Planet Earth', 'I dont know', 'UK and US English'), ('Suuuuuha', 'student', 'Nazareth', 'BLIMEY!', 'Arabic, English'), ('RQ16', 'student', 'Everywhere', 'self-obsessed', 'Arabic, English'), ('mavis', 'student', 'Nazareth', 'no comment', 'English, Arabic شوي');

COMMIT;
