var express = require("express");
var app = express();
var handlerBars = require("express3-handlebars").create({defaultLayout: 'main'});

app.engine('handlebars', handlerBars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    let result = 'clgt';
    res.render('home', {result : result});
});

app.get('/headers', (req,res) => {
    res.set('Content-Type','text/plain');
    var s = '';
    for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
    res.send(s);
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500);
    res.render('500')
});
//
app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});
