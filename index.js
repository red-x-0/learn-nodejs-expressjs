require('dotenv').config(); // Load environment variables
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const cors = require("cors");
const helmet = require("helmet");
const { connectDB } = require("./config/db");

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Connect to MongoDB
connectDB(MONGO_URL);

// Routes
const mainRouter = require('./routes/main'); 
const logger = require("./middleware/logger");
const { notFound, errorHandler } = require("./middleware/error");

app.use(logger);
app.use('/', mainRouter);

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
