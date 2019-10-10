const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/users.model'), //created User model loading here
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.set('useUnifiedTopology', true);

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://echohatch1:dbpassword@crudserver-d95jz.mongodb.net/NutritionApp?retryWrites=true', 
{ useNewUrlParser: true });


const userRoute = require('./api/routes/users.routes'); //importing route
userRoute(app); //register the route


app.get('/', (req, res) => {
  res.send("<h1>Welcome to my users API</h1>")
});



app.listen(port);


console.log('Users RESTful API server started on: ' + port);

