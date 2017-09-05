







// var app = require('express')();
// var http = require('http').Server(app);
//
// app.get('/', function(req, res){
//     res.send('<h1>Hello world</h1>');
// });
//
// http.listen(3000, function(){
//     console.log('listening on *:3000');
// });


const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// wss.on('connection', function connection(ws) {
//     ws.on('message', function incoming(message) {
//         console.log('received: %s', message);
//     });
//
//     ws.send('hahaha');
// });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        // Broadcast to everyone else.
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});











// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
//
//
//
//
// app.set('port', (process.env.PORT || 5000));
//
// app.use(express.static(__dirname + '/public'));
//
//
// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
//
// var comment = require('./routes/comment');
//
// app.use('/api/comments', comment);
//
// app.get('/', function(request, response) {
//   response.render('pages/index');
// });
//
//
//
//
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });
//
//
//
//
//
// var mongoose = require('mongoose');
//
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/mongodb_tutorial');
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//     console.log('connected!')
//     // var Book = require('./models/book');
//     //
//     //
//     // var book = new Book();
//     // book.title = 'hi';
//     // book.author = 'sumin';
//     // book.published_date = new Date();
//     //
//     // book.save(function(err){
//     //     if(err){
//     //         console.error(err);
//     //         // res.json({result: 0});
//     //         return;
//     //     }
//     //
//     //     // res.json({result: 1});
//     //
//     // });
// });
//
//
