const express = require('express');
const app = express();
const usersRouter = require('./users');

app.use('/users',usersRouter);

// app.get('/', (req, res) => {
//   res.send('Welcome to the Home Page!');
// });


app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});