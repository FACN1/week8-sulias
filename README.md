# week7-ifitmake-suHapi
An app which shows people involved in FACN1, where a user can see everyone involved, and add new people

[SEE IT ON HEROKU HERE](https://sulias.herokuapp.com/)

## Get Started
```bash
git clone https://github.com/FACN1/week8-sulias.git &&
cd week8-sulias &&
npm i &&
npm run init-project
```

## User stories

**As a** member of Founders and Coders, who wants to learn from my fellow devs
> **I want to** log in with my Github account  
> **So that** I can use my Github organisation's info to see posts from my fellow students.

Acceptance criteria:

+ [x] I can click on a button, which allows me to log in via my Github account
+ [x] The look of the button should make it obvious that it is this form of login
+ [x] Once I'm logged in, I should see a list of blog posts
+ [x] I shouldn't be left with a blank loading screen for too long during the authorisation process, otherwise I will lose confidence in your website and leave.

**As** any user who is logged in
> **I want to** see my username & Github profile picture on the homepage  
> **So that** I benefit from logging in with Github OAuth, and don't have to do any profile setup on your site.

Acceptance criteria:

+ [x] I can see my username & profile picture on each page that I visit

### Stretch goals
**As** the author of my own posts (any authenticated user)
> **I want to** be able to edit the posts that I have written (only my own)  
> **So that** I can retain editorial control & make sure my online content is the best it can be.

Acceptance criteria:

+ [ ] I can click on a button next to any of my posts, which takes me to an edit view
+ [ ] I can't see an edit button next to anyone else's posts
+ [ ] Each user has the same experience (but with their own posts)
+ [ ] Clicking "done" / "submit" changes the content for every user to see
+ [ ] Clicking "done" / "submit" takes me to a view of the new, edited version of my blog post


## Schema
**MEMBERS**

| ***Columns***  | ***Parameters  ***   |
| :------------- | :------------------  |
|       id       |  PRIMARY KEY SERIAL  |
|      name      | VARCHAR(255) NOT NULL|
|    username    | VARCHAR(255) NOT NULL|
|    position    | VARCHAR(100) NOT NULL|
|    location    |     VARCHAR(100)     |
|   description  |         TEXT         |
|    languages   |         TEXT         |
|  access_token  |     VARCHAR(255)     |

**Votes**

| ***Columns***  |        ***Parameters  ***           |
| :------------- |           :-------------            |
|       id       |    PRIMARY KEY SERIAL NOT NULL      |
|    member_id   | references members(id) INT NOT NULL |
|    num_votes   |              INT                    |


<!-- New table -->
**Blog Posts**

| ***Columns***  |              ***Parameters***            |
| :------------- | :--------------------------------------- |
|       id       |       PRIMARY KEY SERIAL NOT NULL        |
|github_author_id| references github_users(id) INT NOT NULL |
|      post      |                    TEXT                  |
|      date      |                    INT                   |

**github_users**

| ***Columns***  | ***Parameters  ***   |
| :------------- | :------------------  |
|       id       |  PRIMARY KEY SERIAL  |
|    username    | VARCHAR(255) NOT NULL|
|      name      | VARCHAR(255) NOT NULL|
|   avatar_url   | VARCHAR(255) NOT NULL|
|    location    |     VARCHAR(100)     |
|  access_token  |     VARCHAR(255)     |


## Schedule / TODO
##### Project Day 1
- [x] Add a new database table to db_build.js
- [x] Add a login button to homepage
- [x] Add GitHub OAuth 2 for login

##### Project Day 2
- [x] Add login button to index
- [x] Add username and profile icon to every page
  - Add to layout/default.hbs
