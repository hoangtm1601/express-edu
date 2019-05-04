const MONGO_URL = "mongodb://127.0.0.1:27017/nodedb";

exports.insert = (mongoClient, insertData) => {
    mongoClient.connect(MONGO_URL, (err, db) => {
        if (err) {
            throw err;
        }
        console.log('Connect to mongodb successfully...');

        let nodeDb = db.db('nodedb');
        let products = nodeDb.collection('products');

        products.insertOne(insertData, (error, response) => {
            if (error) {
                throw error;
            }
            console.log(response);
        });
        db.close();
        console.log('Connect closed');
    });
};

exports.index = async (mongoClient) => {
    let db = await mongoClient.connect(MONGO_URL);
    console.log('after db');
    let nodeDb = db.db('nodedb');
    let products = nodeDb.collection('products');
    let result = await products.find({}).toArray();
    console.log('after result');
    console.log(result);

    return result;
};