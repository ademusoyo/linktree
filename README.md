# Linktree APP 





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

When that is complete, run `node index.js` to start the server.

You should see the following in your terminal
```
Hello! App is running on port 3000.
```


