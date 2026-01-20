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
// const express = require('express');
// const app = express();
// const port = 3000;
// app.get('/search',(req,res)=>{
//   res.send(`Search Query: ${req.query.q}`);
// });
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// Multiple Route Handlers
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/example/b', (req, res, next) => {
//   console.log('First handler executed. ');
//   next();
// }, (req, res) => {
//   res.send('Second handler executed.');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// array of handlers
// const express = require('express');
// const app = express();
// const port = 3000;      
// const cb0 = (req, res, next)=> {
//   console.log('Callback 0')
//   next()
// }
// const cb1 = (req, res, next) =>{
//   console.log('Callback 1')
//   next()
// }
// const cb2 = (req, res)=> {
//   res.send('Hello from Callback 2')
// }
// app.get('/example', [cb0, cb1, cb2]);


// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


// Route Chaining
const express = require('express');
const app = express();
const port = 3000;

app.route('/book')
  .get((req,res)=>{
    res.send('Get a random book');
  })
  .post((req,res)=>{
    res.send('Add a book');
  })
  .put((req,res)=>{
    res.send('Update the book');
  }) 
  .delete((req,res)=>{
    res.send('Delete the book');
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
