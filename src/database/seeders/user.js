module.exports = {
    up: queryInterface => queryInterface.bulkInsert(
      'users',
      [
          // Grade 1
        {
            first_name: 'John',
            last_name: 'Doe',
            login_ID: 6,
            branch: 'branch1',
            image_url: 'https://unsplash.com/photos/sLxe9F-gyYo',
            password: 'xxxxxxxxxxxxxx',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
      ],
      {}
    ),
  
    down: queryInterface => queryInterface.bulkDelete('users', null, {})
  };