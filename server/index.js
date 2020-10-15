const express = require('express');

//parse json that comes in 
// const bodyParser = require('body-parser');
//use express.json() or express.urlencoded() for forms

//cross compatibility stuff
const cors = require('cors');



//initialize app with express
const app = express();

//middleware for dependencies
app.use(express.json());
app.use(cors());

const posts = require('./routes/api/posts')

app.use('/api/posts', posts);

//port for heroku, localhost will run on 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))