//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete: gets document back as well as deleting it
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    //db.collection('Users').deleteMany({name: 'Mark'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5be8f1079c4b1de16c634863")
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

    //client.close();
});