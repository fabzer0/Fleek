module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      username: 'testuser',
      email: 'test.user@xtg.com',
      password: 'Testuser#3',
      city: 'Nairobi',
      isVerified: true,
      createdAt: '2019-08-14 16:13:57.765+03',
      updatedAt: '2019-08-14 16:13:57.765+03'
    },
    {
      username: 'testuser1',
      email: 'test.user1@xtg.com',
      password: 'Testuser#3',
      city: 'Nairobi',
      createdAt: '2019-08-14 16:13:57.765+03',
      updatedAt: '2019-08-14 16:13:57.765+03'
    },
    {
      username: 'testuser2',
      email: 'test.user2@xtg.com',
      password: 'Testuser#3',
      city: 'Nairobi',
      createdAt: '2019-08-14 16:13:57.765+03',
      updatedAt: '2019-08-14 16:13:57.765+03'
    }
  ]),
  down: queryInterface => queryInterface.bulkDelete('Users')
}
