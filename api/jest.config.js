module.exports = {
    preset: "@shelf/jest-mongodb"
};
// const fs = require('fs');

// const testSeed = fs.readFileSync('./db/seed.js').toString();

// const resetTestDB = () => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const db = new Pool();
//         await db.query(testSeed);
//         resolve('Test DB reset');
//       } catch (err) {
//         reject(`Test DB could not be reset: ${err} in ${err.file}`);
//       }
//     });
//   };

// module.exports = resetTestDB;