var express = require('express');
var bodyParser = require('body-parser');
var app = express();




app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var comment = require('./routes/comment');

app.use('/api/comments', comment);

app.get('/', function(request, response) {
  response.render('pages/index');
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});





var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongodb_tutorial');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
    console.log('connected!')
    // var Book = require('./models/book');
    //
    //
    // var book = new Book();
    // book.title = 'hi';
    // book.author = 'sumin';
    // book.published_date = new Date();
    //
    // book.save(function(err){
    //     if(err){
    //         console.error(err);
    //         // res.json({result: 0});
    //         return;
    //     }
    //
    //     // res.json({result: 1});
    //
    // });
});


