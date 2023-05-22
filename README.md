# E-commerce Back End Starter Code

## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation
1) Install Node.js on your machine from [Node.js Downloads](https://nodejs.org/en/download).
2) Install the required Node packages with;
```sh
npm i
or
npm install
```
4) Start the SQL Server
```sh
mysql.server start
```
3) Import the MySQL schema:
```sql
mysql -u [username] -p [password] < ./db/schema.sql
```
4) Seed the database with:
```sh
npm run seed
```
5) Start the server for development with:
```sh
npm run watch
```
6) Run in production with:
 ```sh
 npm run start
 ```
