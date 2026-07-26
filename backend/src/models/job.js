const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Job = sequelize.define('Job', {
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  skills: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Job;