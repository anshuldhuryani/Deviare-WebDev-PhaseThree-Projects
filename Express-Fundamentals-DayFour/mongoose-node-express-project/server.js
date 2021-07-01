var express = require('express');
var app = express();
var dbConfig = require('./config/db.config');
var productRoutes = require('./routes/product.routes');
var categoryRoutes = require('./routes/category.routes');

// Adding Middlewares
app.use(express.json());
// Routes Middlewares
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

// GET Request: http://localhost:3000/
app.get('/', function (req, res) {
    res.send("Express Demo Project!!");
})


app.listen(3000, function () {
    console.log('The server is running at port 3000!!');
})