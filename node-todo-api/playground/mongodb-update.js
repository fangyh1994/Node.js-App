//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5be8ee589c4b1de16c63477a")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5be8f3f69c4b1de16c63499d")
    }, {
        $set: {
            name: 'Fin'
        }, 
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result);
    })
    //client.close();
});