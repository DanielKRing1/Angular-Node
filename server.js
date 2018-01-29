// Use npm init to create a json file for dependencies
// Use npm install [package_name] --save to install and write a packaege to the dependencies
// Use npm install to install all dependencies from package.json

const express = require('express');

var app = express();

// Serve content before app.get()
app.use(express.static('.'));

app.get('*', function(req, res) {
  res.sendFile(__dirname+'/public/html/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(3000, () => {
   console.log('Server is up on port 3000');
});
