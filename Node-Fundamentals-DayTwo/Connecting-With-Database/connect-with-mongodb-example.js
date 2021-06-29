var mongodb = require('mongodb');

mongodb.connect("mongodb://localhost:27017/simplilearndb",
    { useUnifiedTopology: true }, (err, db) => {
        if (err) throw err;
        console.log('You are connected to db!!')
    });