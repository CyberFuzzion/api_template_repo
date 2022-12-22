import chai from 'chai';
import {
  sequelize, dataTypes, checkModelName, checkPropertyExists,
} from 'sequelize-test-helpers';

import TransactionModel from '../../models/transaction';

const { expect } = chai;
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('Transaction Model', () => {
  const Transaction = TransactionModel(sequelize, dataTypes);
  const transactions = new Transaction();

  checkModelName(Transaction)('transactions');

  context('properties', () => {
     ['user_id', 'transaction_type', 'amount'].forEach(checkPropertyExists(transactions));
  });
});