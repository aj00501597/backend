const express = require('express');
const cors = require('cors');
const commentRouter = require('./src/router/commentRouter');

require('dotenv').config();
require('./src/mongoose/db/mongodb');

const app = express();
app.use(cors());
app.use(express.json());
app.use(commentRouter);

module.exports = app;
