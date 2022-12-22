'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    user_id: DataTypes.INTEGER,
    transaction_type: DataTypes.STRING,
    amount: DataTypes.INTEGER,    
  }, {});
  return transactions;
};