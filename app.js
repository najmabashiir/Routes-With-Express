//basic routing example
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Welcome to the Home Page!');
// });

// app.get('/about', (req, res) => {
//   res.send('About Us Page');
// });             

// app.get('/contact', (req, res) => {
//   res.send('contact us at ');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// route parameters example
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/users/:userId', (req, res) =>{
//   res.send(`User ID: ${req.params.userId}`);
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// }); 

// Multiple Route Parameters
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/products/:catgeory/:productid',(req,res)=>{
//   res.send(`Category:${req.params.catgeory},Product Id:${req.params.productid}`);
// })
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// Query Parameters
const express = require('express');
const app = express();
const port = 3000;
app.get('/search',(req,res)=>{
  res.send(`Search Query: ${req.query.q}`);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});