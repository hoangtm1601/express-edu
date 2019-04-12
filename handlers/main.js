exports.home = (request, response) => {
    let result = 'clgt';
    response.render('home', {result : result});
};

exports.about = (request, response) => {
    response.render('about');
};

exports.form = (request, response) => {
    response.render('form', { csrf : 'csrf'});
};

exports.authorize = (request, response, next) => {
    if (request.body.email === 'tnc.ck95@gmail.com') {
        return next();
    }

    response.render('404');
};

exports.handle = (request, response) => {
    let name = request.body.name;
    let email = request.body.email;

    response.json({
        name : name,
        email : email,
    });
};