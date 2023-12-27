const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();

mongoose.connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/investment', require('./routes/investmentRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

module.exports = app;
