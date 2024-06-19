require('dotenv').config(); // Load environment variables
const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();
const port = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const cors = require("cors");
const helmet = require("helmet");
const { connectDB } = require("./config/db");

//==== live reload =====
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' directory

// Connect to MongoDB
connectDB(MONGO_URL);

// Routes
const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');
const logger = require("./middleware/logger");
const { notFound, errorHandler } = require("./middleware/error");

app.use('/', mainRouter);
app.use('/user', userRouter);

// Error Handling
app.use(logger);
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
