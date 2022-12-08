module.exports = {
    up: queryInterface => queryInterface.bulkInsert(
      'transactions',
      [
          // transactions
        {
          user_id: 12345,
          transaction_type: 'Received Money',
          amount: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 12345,
          transaction_type: 'Send Money',
          amount: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),
  
    down: queryInterface => queryInterface.bulkDelete('transactions', null, {})
  };