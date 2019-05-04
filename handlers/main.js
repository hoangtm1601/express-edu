const mongoClient = require("mongodb").MongoClient;
const mongoDriver = require('../ultis/mongoDrive');

exports.index = async (request, response) => {
    let products = await mongoDriver.index(mongoClient);
    response.render('products', {products: products});
};

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

exports.handle = (request, response) => {
    let name = request.body.name;
    let price = request.body.price;
    mongoDriver.insert(mongoClient, {
        name: name,
        price: price,
    });

    response.json({
        name : name,
        price : price,
    });
};