const env = require('./env.cmd');

module.exports = new Promise((resolve) => {
  env
    .then((result) => resolve({
      ...result,
      ...({
        NODE_ENV: 'testing',
        DB_NAME: `${result.DB_NAME}_test`,
      })
    }));
});
