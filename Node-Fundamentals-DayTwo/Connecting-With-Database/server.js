var mongoose = require('mongoose');
var User = require('./models/user');

// mongoose.connect('mongodb://localhost:27017/simplilearndb',
//     { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('You are connected to db successfully.');
//         var user = new User({ name: 'King', age: 23 });
//         user.save((err) => {
//             if (err) throw err;
//             console.log('User Added Successfully..!!');
//         })
//     })
//     .catch((error) => { console.log(error) });

mongoose.connect('mongodb://localhost:27017/simplilearndb',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('You are connected to db successfully.');
        var users = [{ name: 'King', age: 23 }, { name: 'Kochhar', age: 23 }, { name: 'Kartik', age: 23 }]
        User.collection.insertMany(users, (err) => {
            if (err) throw err;
            console.log('Users Added Successfully.')
        })
    })
    .catch((error) => { console.log(error) });
