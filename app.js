const express = require("express");
const app = express();
const handlerBars = require("express3-handlebars").create({defaultLayout: 'main'});
app.use(express.urlencoded());
require('./routes/route.js')(app);

app.engine('handlebars', handlerBars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});