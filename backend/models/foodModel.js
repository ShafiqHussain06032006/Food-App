import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const foodModel = sequelize.models.foodModel || sequelize.define('foodModel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // ✅ No createdAt or updatedAt
});

export default foodModel;
