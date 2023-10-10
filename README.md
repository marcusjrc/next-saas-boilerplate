
# SaaS App Boilerplate

An saas boilerplate app built using TypeScript, PostgreSQL, NextAuth and PgTyped.

## Requirements
You will need:
1. Node v16+
1. Docker

## Developer set up instructions

1. First, install dependencies using ```pnpm install```
1. Copy .env.example to .env and replace the missing variables. 
1. Next, run docker-compose to set up your local database
1. Third, install dbmate (https://github.com/amacneil/dbmate) and run `dbmate migrate` to get your local database migrated and ready for use
1. Now, run the app server using ```pnpm dev```
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Database setup, management & queries

We use two packages for managing our postgresql database.
1. DBMate (https://github.com/amacneil/dbmate) - is used to manage our migrations files & migrating the database with them. It has various cli cmds you can leverage to migrate your local db.
2. PGTyped (https://pgtyped.dev/docs/getting-started) - we use to create typed queries from raw SQL queries. These raw & compiled queries can be found in ./src/db/queries