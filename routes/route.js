var main = require('../handlers/main.js');

module.exports = (app) => {

    app.get('/', main.home);

    app.get('/form', main.form);

    app.post('/handle', main.authorize, main.handle);

    app.post('/articles/:article', (request, response) => {
        response.render('article', {
            article : request.params.article,
            email: request.body.email
        })
    });

    app.get('/about', main.about);

    app.use(function (req, res) {
        res.status(404);
        res.render('404');
    });

    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(500);
        res.render('500')
    });
};