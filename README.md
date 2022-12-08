# Wizkid
The backend of Wizkid mobile App

This project demonstrates the Wizkid POC (Provides a hosted API that powers the UI with seeded data).

## Stacks
- ```Database```   : PostgreSQL
- ```Language```   : Javascript/ES6^
- ```Unit Test```   :  Mocha, Chai, Sinon
- ```Framework / Environment```   :  Node.js && Express
- ```version control```   : Git/Github

## Installation and Setup
1. Ensure you have all the below listed stacks on your machine
2. From you terminal run ```git clone https://github.com/CyberFuzzion/wizkid.git```
3. After cloning run ```cd wizkid``` to navigate to cloned directory
4. run ```npm install``` to install all the devDevpendencies. **See "devDependencies" section in package.json file for list of all packages that will be installed**
5. Add environment variables in ```.env``` file, see ```env-sample``` file for example.
6. run ```npm run migrate``` to run database migrations
7. run ```npm run seed``` to seed the database with prepared "transactions" seeds
8. run ```npm test``` or ```npm t``` to run test

## Scripts
- ```npm run start:dev```   : To run development mode
- ```npm run build```   : To run build
- ```npm start```   : To run production mode
- ```npm test```   :  To run test
- See the **scripts** section of **package.json** file for all available configured scripts. 

## Models and Database
Postgres and Sequelise ORM Script.
- ```npm run migrate``` : to run models migration to database
- ```npm run undo-migrate``` : to undo models migration to database
- ```npm run seed``` : to run seed
- ```npm run undo-seed``` : to undo seed

See sequelise documentation below for more guides on creating and managing models https://sequelize.org/master/manual/migrations.html**

## API Documentation
### Routes
- ```POST /api/v1/auth/sign_in```: Sign in
- ```GET  /api/v1/transactions/fetch```: Get Transactions

## Thank you
