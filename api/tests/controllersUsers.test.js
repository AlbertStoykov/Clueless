const usersController = require('../controllers/users')
const User = require('../models/User');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('users controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('index', () => {
        test('it returns users with a 200 status code', async () => {
            jest.spyOn(User, 'all', 'get')
                 .mockResolvedValue(['admin', 'admin2']);
            await usersController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['admin', 'admin2']);
        })
    });
})

describe('users controller', () => {
  beforeEach(() =>  jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe('show', () => {
      test('it returns users with a 200 status code', async () => {
          jest.spyOn(User, 'all', 'get')
               .mockResolvedValue(['admin']);
          await usersController.show(null, mockRes);
          expect(mockStatus).toHaveBeenCalledWith(200);
          expect(mockJson).toHaveBeenCalledWith(['admin']);
      })
  });
})

describe('users controller', () => {
  beforeEach(() =>  jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe('create', () => {
      test('it returns users with a 200 status code', async () => {
          jest.spyOn(User, 'all', 'get')
               .mockResolvedValue(['admin']);
          await usersController.create(null, mockRes);
          expect(mockStatus).toHaveBeenCalledWith(201);
          expect(mockJson).toHaveBeenCalledWith(['admin']);
      })
  });
})

describe("show by id", () => {
    test("it returns a habit with a 200 status code", async () => {
      let testHabit = {
        username: 'admin'
      };
    })
  });
 
////////////////////////////////////////////////////////////////

// describe('auth controller', () => {
//     beforeEach(() =>  jest.clearAllMocks());

//     afterAll(() => jest.resetAllMocks());

//     describe('getSignup', () => {
//         test('it renders the signup page with a 200 status code', async () => {
//             expect(mockStatus).toHaveBeenCalledWith(200);
//         })
//     });

//     describe('getSignup', () => {
//         test('it fails to render the signup page with a 500 status code', async () => {
//             expect(mockStatus).toHaveBeenCalledWith(500);
//         })
//     });

//     describe('addUser', () => {
//         test('it adds a user with a 201 status code', async () => {            
//             expect(mockStatus).toHaveBeenCalledWith(201);
//         })
//     });

//     describe('addUser', () => {
//         test('it fails to add a user with a 422 status code', async () => {            
//             expect(mockStatus).toHaveBeenCalledWith(422);
//         })
//     });

//     describe('getLogin', () => {
//         test('it renders the login page with a 200 status code', async () => {            
//             expect(mockStatus).toHaveBeenCalledWith(201);
//         })
//     });

//     describe('getLogin', () => {
//         test('it fails to render the login page with a 500 status code', async () => {            
//             expect(mockStatus).toHaveBeenCalledWith(500);
//         })
//     });

//     describe('getLogout', () => {
//         test('it logs the user out by changing jwt cookie with a 200 status code', async () => {            
//             expect(mockStatus).toHaveBeenCalledWith(204);
//         })
//     });

//     describe('getLogin', () => {
//         test('it fails to log the user out by changing jwt cookie with a 200 status code', async () => {            
//             expect(mockStatus).toHaveBeenCalledWith(406);
//         })
//     });
    
// })