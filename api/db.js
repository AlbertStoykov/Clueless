const { MongoClient } = require('mongodb');

let dbConnection;

const mongodbURI =
  'mongodb+srv://quiz-admin:quiz-password@quizapp.y2bfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(mongodbURI)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
