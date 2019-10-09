const registerPayload = {
  username: "rollplanes_",
  email: "fabish.olasi@andela.com",
  password: "Testuser#3",
  country: "Kenya",
  city: "Nairobi"
};

const loginPayload = {
  username: "rollplanes_",
  password: "Testuser#3"
};

const wrongPWD = {
  username: "rollplanes_",
  password: "testuser"
};

const invalidUsername = {
  username: "rollplanes",
  password: "testuser#3"
};

export { registerPayload, loginPayload, wrongPWD, invalidUsername };
