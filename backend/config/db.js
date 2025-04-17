// config/db.js
import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
)

const testConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('✅ Database connection has been established successfully.')
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error)
  }
}
testConnection()

// ✅ Export properly for ES module
export default sequelize
