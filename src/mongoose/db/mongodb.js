const mongoose = require('mongoose');
const URI = process.env.DB_URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log('Connected to database');
  })
  .catch(() => {
    console.log('Connection to database failed');
  });
