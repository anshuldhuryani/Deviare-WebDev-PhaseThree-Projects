var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/simplilearndb",
    { useUnifiedTopology: true }, (err, db) => {
        if (err) throw err;
        var dbname = db.db("simplilearndb"); //here
        dbname.createCollection("supplier", (err) => {
            if (err) throw err;
            console.log('Collection Created Successfully..!!');
        })
    });