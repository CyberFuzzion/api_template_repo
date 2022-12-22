'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    login_ID: DataTypes.INTEGER,
    branch: DataTypes.STRING,
    image_url: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});

  return users;
};
