import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import GraphQLHTTP from 'express-graphql';
import mockData from './data/mock_data';
let app = express();
const useMongo = false;

// app.get('/', (req, res) => res.send('hello express!'));

if (!useMongo) {
  app.use(express.static('public'));
  app.listen(3000);
}

function dropUserCollection(db, callback) {
        user = db.collection('user_collection');
        if (undefined != user) {
            user.drop(function(err, reply) {
                callback(0);
            });
        } else {
            callback(0);
        }
}

function updateCollection(db, collection, mockCollection, documents) {
  let docs = dbs.collection(collection).find().toArray((err, docs) => {
    if (err) {
      throw err;
    }
    console.log(docs);
    documents = docs;
    if (docs.length === 0) {
      dbs.collection(collection).insert(mockData[mockCollection], (err, inner_docs) => {
        if (err) {
          throw err;
        }
        documents = mockData[mockCollection];
      });
    }
  });
}

if (useMongo) {
  let dbs;
  let documents = [];
  var url = 'mongodb://localhost:27017/test';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    dbs = db;
    updateCollection(dbs, 'patients_test', 'Patients');
    updateCollection(dbs, 'doctors_test', 'Doctors');
    console.log("Connected correctly to server.");
    app.listen(3000);
    //db.close();
  });
}


app.get("/login/:type", (req,res) => {
  let type = req.params.type === 'doctor' ? 'doctors_test' : 'patients_test';
  let results = [];
  dbs.collection(type).find({
    "login": req.param.username,
    "password": req.param.password
  }).toArray((err, first) => {
      if (err || first === null) {
        res.status(500).send();
        throw err;
      }
      results.push(first);
      if (type === 'doctors_test' && first === null) {
        dbs.collection(type).find({
          // get the first patient
          "key": first.patients[0]
        }, (err, second) => {
            results.push(second);
            res.json(results);
        });
      }
      else {
            res.json(results);
      }
  });
});

app.get("/data/items", (req,res) => {
  dbs.collection("links").find({}).toArray((err, links) => {
    if (err) throw err;

    res.json(links);
  });
});
