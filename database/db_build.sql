BEGIN;

DROP TABLE IF EXISTS members, votes cascade;

CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(100) NOT NULL,
  location VARCHAR(100),
  description TEXT,
  languages TEXT
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

INSERT INTO blog (author_id, post) VALUES (1, 'Hapi World');


INSERT INTO members (name, position, location, description, languages)
VALUES ('macintoshhelper', 'student', 'Planet Earth', 'I dont know', 'UK and US English'), ('Suuuuuha', 'student', 'Nazareth', 'BLIMEY!', 'Arabic, English'), ('RQ16', 'student', 'Everywhere', 'self-obsessed', 'Arabic, English'), ('mavis', 'student', 'Nazareth', 'no comment', 'English, Arabic شوي');

COMMIT;
