//PLEASE MAKE SURE THIS FILE IS ONLY RUN IN DEVELOPMENT MODE AS IT SETS NODE_ENV TO development

const fs = require('fs');
const path = require('path');
const { cwd } = require('process');
const yaml = require('js-yaml');

const dbVariables = [
  'DB_HOST',
  'DB_PORT',
];

module.exports = new Promise((resolve) => {
  let env;
  const DIR = cwd();
  try {
    const file = path.join(DIR, '.env.yaml');
    if (fs.existsSync(file)) {
      env = yaml.load(fs.readFileSync(file, { encoding: 'utf8' })) || {};
    }
  }
  catch (err) { console.log(err); }
  if (!env) {
    env = {};
  } else {
    env.USER
  }

  // This file will be run in development only
  env.NODE_ENV = 'development';

  //
  dbVariables.forEach((envVar) => {
    env[envVar] = env[`DEV_${envVar}`];
  });

  resolve(env || {});
});
