function getUserInfo(user, options = {}) {
    const { firstName, age, city } = user;
    const { prefix = '' } = options;
    return `${prefix}${firstName}, ${age} years old, lives in ${city}`;
  }
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    city: 'New York',
    country: 'USA',
  };
  console.log(getUserInfo(user)); // Виведе "John, 30 years old, lives in New York"
  console.log(getUserInfo(user, { prefix: 'User: ' })); // Виведе "User: John, 30 years old, lives in New York"
  