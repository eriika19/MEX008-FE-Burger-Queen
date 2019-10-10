const express = require('express');

const connectDB = require('../config/db')

const app = express();

//Connect database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

app.get('*', function(req, res) {  res.render('Error');});


//Define Routes for apis
app.use('/api/users', require('../burguerqueen/routes/api/users'));
app.use('/api/auth', require('../burguerqueen/routes/api/auth'));
app.use('/api/orders', require('../burguerqueen/routes/api/orders'));

//Define Routes for pages
app.use('/pages/home', require('../burguerqueen/routes/pages/home'));
app.use('/pages/menu', require('../burguerqueen/routes/pages/menu'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
