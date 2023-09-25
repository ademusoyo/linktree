# Linktree APP 

# Overview 
This is a simple linktree application that enables users to: 
- add new links
- edit the links they've already created
- delete links they no longer want to see. 

This application was built using ReactJs/Typescript in the Front-End with an ExpressJS server and Postgres as a Database

## Assumptions
The overall assumption of this app is that it is not intended to be released to production anytime soon.Because of this here are somethings I made assumptions about: 
- There wasn't a real need to focus on mobile
- When a link gets deleted, we can permanently delete it from our database (instead of soft deleting)
- Designs didn't have to be "pretty" more importance was placed on getting the job and making sure it ran properly.
- For client-side validation, we want to ensure that the url is a valid url before we send it back to our database.



# Frontend 

The frontend is built using react typescript.  To run this code:

- head to the `client` directory 
- install node modules using `npm install`
- run `npm start`

You should see the following in your terminal 

```
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.159:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
No issues found.

```

## Testing
To run the front-end tests run `npm test` in your terminal in the same client directory.


# Backend 
The backend uses postgres as a database with nodejs express server. To create a new postgres database on your local host: 


## Initializing the Database

First, install postgres on your computer

`brew install postgresql`

When that is finished you should be able to run the following command to run your server: 

`brew services start postgresql`

To ensure that postgres is running as expected enter `psql`

You should see the following: 

```
psql (14.9 (Homebrew))
Type "help" for help.

<your username>=#
```

Exit out of psql using `\q`

change your directory to the `database` directory and run the sql script by entering the following command in your terminal 

`psql -f linktree_database.sql`

This will create the `linktree_app` database and the `urls` table locally on your machine with two entries. You should see the following output in your terminal

``` 
CREATE DATABASE
You are now connected to database "linktree_app" as user "<your_username>".
CREATE TABLE
INSERT 0 2
```


open the `queries.js` file and update the 'user' key to have your username as the value.

```
const pool = new Pool({
  user: '<your username>',
 ...
})
```

### Database Rollback
In the event that there is an issue with the initial database setup run the rollback script by entering the following in your terminal:

`psql -f linktree_database_rollback.sql`

## Starting the server

Navigate to the `server` directory and install the node modules by running `npm install`

When that is complete, run `node server.js` to start the server.

You should see the following in your terminal
```
Hello! App is running on port 3001.
```

## Testing
To run the back-end tests run `npm test` in your terminal in the `servers`.


