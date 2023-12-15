const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://db_esgi_cloud_exam_76087_user:Z5gXW0FkqrPDx3E7P28VDVzLCzuMfRyD@dpg-clu1ln21hbls73e8c1t0-a.frankfurt-postgres.render.com/db_esgi_cloud_exam_76087', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
