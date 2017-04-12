# week7-ifitmake-suHapi
An app which shows people involved in FACN1, where a user can see everyone involved, and add new people

[SEE IT ON HEROKU HERE](https://sulias.herokuapp.com/)

## Get Started
```bash
git clone https://github.com/FACN1/week7-ifitmake-suHapi.git &&
cd week7-ifitmake-suHapi &&
npm i &&
touch config.env &&
echo 'Add database URL to config.env'
```

## User Stories

As a visitor to the site

> I want to see a list of all the people involved when I first visit the site

> I want to be able to search for specific or groups people involved easily (by name, location, member type etc) to get information about them

> I want to be able to add me/others to the list and see the list with me/them in it

> I want to be able to vote for my favourite member and see the number of votes members have.

As a potential applicant

> I want to find a list of people to talk to about FAC Nazareth

As a potential employer

> I want to find the 'best' candidate from FAC Nazareth to maybe hire

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
| ***Columns***  |           ***Parameters***          |
| :------------- |           :-------------            |
|       id       |    PRIMARY KEY SERIAL NOT NULL      |
|    author_id   | references members(id) INT NOT NULL |
|      post      |                 TEXT                |
|      date      |                 INT                 |

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
- Add a new database table to db_build.js
- Add a login button to homepage
- Add GitHub OAuth 2 for login

##### Project Day 2
- Add login button to index
-
