var express = require('express');
var app = express();

app.set('view engine', 'hbs');
//static files
app.use(express.static('public'));
//views with URL
app.get('/', function(request, response) {
  var context = {
    title: 'Exercise Home'
  }
  response.render('home.hbs', context);
});

app.get('/cats', function(request, response) {
  var context = {
    title: 'Cat Page'
  }
  response.render(cats.hbs, context);
});

app.get('/dogs', function(request, response) {
  var context = {
    title: 'Dog Page'
  }
  response.render('dogs.hbs', context);
});

app.get('/cats_and_dogs', function(request, response) {
  var context = {
    title: 'Cats and Dogs Together'
  }
  response.render('together.hbs', context);
});
//URL Parameters
app.get('/greet/:slug', function (request, response) {
  var slug = request.params.slug;
  response.send('Hello, ' + slug + '!');
});

//GET Parameters
app.get('/year', function (request, response) {
  var year = request.query.year || "1900";
  var context = {
    title: 'Hello',
    year: year,
    friend: [
      {name: "john"},
      {name: "jane"}
    ]
  };
  response.render('hello.hbs', context);
});
//connection to server
app.listen(9000, function () {
  console.log('listening on port 8000');
});
