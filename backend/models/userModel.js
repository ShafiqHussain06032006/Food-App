import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const userModel = sequelize.models.user || sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false, // required
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, // required
    unique: true,     // must be unique
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, // required
  },
  cartdata: {
    type: DataTypes.JSON, // Use JSON to store an object
    allowNull: false,
    defaultValue: {},     // default: {}
  },
}, {
  timestamps: false,  // No createdAt or updatedAt
});

export default userModel;
