module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert("Profiles", [
      {
        userId: 1,
        bio: "This is really a good time",
        phone: null,
        gender: "male",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 2,
        bio: "I am literally having a good time right now",
        phone: "0486883694",
        gender: "female",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 3,
        bio: "This is really a good time",
        phone: "0183483963",
        gender: "male",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 4,
        bio: "This is really a good time",
        phone: "0143883499",
        gender: "male",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 5,
        bio: "This is really a good time",
        phone: "0082888990",
        gender: "female",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 6,
        bio: "This is really a good time",
        phone: null,
        gender: "male",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 7,
        bio: "This is really a good time",
        phone: null,
        gender: "female",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 8,
        bio: "This is really a good time",
        phone: "0683883993",
        gender: "male",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 9,
        bio: "This is really a good time",
        phone: "0983883993",
        gender: null,
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 10,
        bio: "This is really a good time",
        phone: "0883883993",
        gender: null,
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 11,
        bio: "This is really a good time",
        phone: "0513883993",
        gender: null,
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 12,
        bio: "This is really a good time",
        phone: null,
        gender: null,
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 13,
        bio: "This is really a good time",
        phone: "0483983993",
        gender: "male",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 14,
        bio: "This is really a good time",
        phone: null,
        gender: "female",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 15,
        bio: "This is really a good time",
        phone: "0383883993",
        gender: "male",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 16,
        bio: "This is really a good time",
        phone: null,
        gender: "male",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 17,
        bio: "This is really a good time",
        phone: "0283883793",
        gender: "male",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 18,
        bio: "This is really a good time",
        phone: null,
        gender: "female",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 19,
        bio: "This is really a good time",
        phone: "0183683993",
        gender: "female",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      },
      {
        userId: 20,
        bio: "This is really a good time",
        phone: null,
        gender: "male",
        createdAt: "2019-08-14 16:13:57.765+03",
        updatedAt: "2019-08-14 16:13:57.765+03"
      }
    ]),

  down: queryInterface => queryInterface.bulkDelete("Profiles")
};
