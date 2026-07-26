const app = require('./app');
const env = require('./config/env');
const sequelize = require('./config/db');

require('./models/User');
require('./models/Job');
require('./models/Application');
require('./models/associations');

const PORT = env.port;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected successfully');

    await sequelize.sync({ alter: true});
    
    console.log('Database synced successfully');

    app.listen(PORT, () => {
      console.log(`Server running in ${env.nodeEnv} mode on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
};

startServer();