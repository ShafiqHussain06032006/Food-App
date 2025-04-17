import sequelize from "./config/db.js"
import './models/index.js'
async function sync() {
  try {
    await sequelize.sync({ force: true });
    console.log('Tables created successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error creating tables:', error);
    process.exit(1);
  }
}

sync();