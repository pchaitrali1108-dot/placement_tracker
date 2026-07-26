const User = require('./User');
const Job = require('./Job');
const Application = require('./Application');

User.hasMany(Application, {
  foreignKey: 'userId',
});

Application.belongsTo(User, {
  foreignKey: 'userId',
});

Job.hasMany(Application, {
  foreignKey: 'jobId',
});

Application.belongsTo(Job, {
  foreignKey: 'jobId',
});

module.exports = {
  User,
  Job,
  Application,
};