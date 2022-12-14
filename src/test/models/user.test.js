import chai from 'chai';
import {
  sequelize, dataTypes, checkModelName, checkPropertyExists,
} from 'sequelize-test-helpers';

import UserModel from '../../models/user';

const { expect } = chai;
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('User Model', () => {
  const User = UserModel(sequelize, dataTypes);
  const users = new User();

  checkModelName(User)('users');

  context('properties', () => {
     ['first_name', 'last_name', 'login_ID', 'branch', 'password'].forEach(checkPropertyExists(users));
  });
});