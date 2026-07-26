const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Application = sequelize.define('Application', {

     userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  jobId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM(
      'Applied',
      'Shortlisted',
      'Interview',
      'Selected',
      'Rejected'
    ),
    defaultValue: 'Applied',
    allowNull: false,
  },

  appliedDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Application;