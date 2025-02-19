const app = require('./app');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, Express.js Server!</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
