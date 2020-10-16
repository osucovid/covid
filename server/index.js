//for express
const express = require('express');

//cross compatibility stuff
const cors = require('cors');

//initialize app with express
const app = express();

//middleware for dependencies
app.use(express.json());
app.use(cors());



//initially set up as a simple crud app for posting
const posts = require('./routes/api/posts')

app.use('/api/posts', posts);

//handle production
if(process.env.NODE_ENV === 'production') {
    //static folder - __dirname = current directory  and concatenate instead of using path module
    //look at that folder as our static folder
    app.use(express.static(__dirname + '/public/'));

    //handle spa - any route 
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

//port for heroku, localhost will run on 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))