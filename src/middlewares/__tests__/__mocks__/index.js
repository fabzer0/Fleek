const req1 = {
  body: {
    username: "fabzer0",
    email: "testuser@gmail.com",
    password: "",
    country: "",
    city: "Nairobi"
  }
};

const req2 = {
  body: {
    username: "fabzer0",
    email: "testuser@gmail.com",
    password: "testuser123",
    country: "Kenya",
    city: "Nairobi"
  }
};

const req3 = {
  body: {
    username: "rollplanes_",
    password: "Test@user123"
  }
};

const req4 = {
  body: {
    username: "rollplanes.#",
    email: "testuser@gmail.com",
    password: "Test#user123",
    country: "Kenya",
    city: "Nairobi"
  }
};

const req5 = {
  body: {
    username: "rollplanes_",
    email: "fabish.apeli.@icloud.com",
    password: "Test#user123",
    country: "Kenya",
    city: "Nairobi"
  }
};

const req6 = {
  body: {
    username: "rollplanes_",
    email: "fabish.apeli@icloud.com",
    password: "test#user123",
    country: "Kenya",
    city: "Nairobi"
  }
};

const req7 = {
  body: {
    username: "rollplanes_",
    email: "fabish.apeli@icloud.com",
    password: "Test#user123",
    country: "Kenya",
    city: "Nairobi"
  }
};

const props = ["username", "email", "password", "country", "city"];

export { req1, req2, req3, req4, req5, req6, req7, props };
