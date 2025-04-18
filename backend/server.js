import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import foodRouter from './routes/foodRoute.js';

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
    res.send("API Working");
});

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads")); //upload the image UI


// Database connection and server start
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected');
    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => console.error('❌ Connection error:', err));
