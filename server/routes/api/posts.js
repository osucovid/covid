const { request } = require('express');
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    //send an array of posts in the db
    
    //{query to find text that matches but leave it empty to recieve all as an array}
    res.send(await posts.find({}).toArray());
});

//add posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});


//delete posts
//deleting by id, deleteOne sends a query with _id and as a paramter request.params.id but _id is a mongodb object id
//and has to be wrapped in method that's attached to the mongodb client (new mongoDb.ObjectID())
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) })
    res.status(200).send();
})

//function to connect to posts collection
//async await is elegant way to handle async data and promises
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://capstonecovid:capstonecovid@covidcluster.w5yhl.mongodb.net/<dbname>?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    //get the posts collection to run methods on it like insert and delete etc
    return client.db('CovidCluster').collection('posts');
}

module.exports = router;