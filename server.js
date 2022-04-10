const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () => 
console.log(`App listening on http://localhost:${PORT}`))
