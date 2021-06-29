
var mongoose = require('mongoose')

/*
mongoose.connect('mongodb://localhost:27017/simplilearndb',
    { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
        if (err) throw err;
        console.log('Connected to Mongodb Successfully!!');
    })
*/

/*
mongoose.connect('mongodb://localhost:27017/simplilearndb',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('You are connected to db successfully.') })
    .catch((error) => { console.log(error) });
*/

mongoose.connect('mongodb://localhost:27017/simplilearndb',
    { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose connection gets connected..')
})

db.on('error', (error) => {
    console.log('Thre is an error : ' + error);
})

db.on('disconnected', () => {
    console.log('Mongoose Connection got disconnected..');
})




