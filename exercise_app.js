var express = require('express');
var app = express();
//body parser for form
var body_parser = require('body-parser');

app.set('view engine', 'hbs');

app.use(body_parser.urlencoded({extended: false}));

//static files
app.use('/public', express.static('public'));
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
  response.render('cat.hbs', context);
});

app.get('/dogs', function(request, response) {
  var context = {
    title: 'Dog Page'
  }
  response.render('dog.hbs', context);
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
  var year = request.query.year;
  var context = {
    title: 'Greet_Page',
    name: slug,
    year: year
  }
  response.render('greet.hbs', context);
});

//GET Parameters
app.get('/year', function (request, response) {
  var year = request.query.year;
  var context = {
    title: 'Birth YEar',
    year: year
  }
  response.render('year.hbs', context);
});
//animals page
app.get('/fav_animals', function (request, response) {
  var context = {
    title: 'Favorite Animals',
    animals: [
      { name: 'cats', favorite: false },
      { name: 'dogs', favorite: true },
      { name: 'tree frogs', favorite: true },
      { name: 'earth worms', favorite: false },
      { name: 'guinea pigs', favorite: true },
    ]
  };
  response.render('animals.hbs', context);
});

//form
app.get('/form', function(request, response) {
  response.render('forms.hbs');
});
//post for form (needed body parser)
app.post('/submit', function(request, response) {
  console.log(request.body);
  response.redirect('/thank-you')
});
//on redirect
app.get('/thank-you', function(request, response) {
  response.render('thanks.hbs', {title: 'Thanks!'});
});
//DB query and error handling
app.get('/search', function(request, response, next) {
  let term = req.query.searchTerm;
  let query = "SELECT * FROM restaurant WHERE \ restaurant.name ILIKE '%$1#%'";
  db.any(query, term)
    .then(function(resultsArray) {
      resp.render('search.hbs', {
        results: resultsArray
      });
    })
    .catch(next);
});


//connection to server
app.listen(8000, function () {
  console.log('listening on port 8000');
});
