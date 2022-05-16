const {MongoClient} = require('mongodb');
//import supertest from 'supertest';

const router = require('../routes/users');
const resetTestDB = require('../jest.config')


//Connection to the database
describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = {_id: 'some-user-id', name: 'John'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});




// users routes

// describe('users endpoints', () => {
//   let api;
//   // beforeEach(async () => {
//   //     await resetTestDB()
//   // });

//   beforeAll(async () => {
//       api = router.listen(3001, () => console.log('Test server running on port 3001'))
//   });

//   afterAll(done => {
//       console.log('Gracefully stopping test server')
//       api.close(done)
//   })

//   it('should return a list of all users in database', async () => {
//       const res = await request(api).get('/users');
//       expect(res.statusCode).toEqual(200);
//   })
  
//   it('should return a specific user', async () => {
//       const res = await request(api).get('/users/:id');s
//       expect(res.statusCode).toEqual(200);
//   }) 
// })
