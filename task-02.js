function getUserInfo(user) {
    const { firstName, lastName, ...contactInfo } = user;
    const contactArray = Object.values(contactInfo);
    return {
      fullName: `${firstName} ${lastName}`,
      contactArray: [...contactArray, user.email, user.phone]
    };
  }
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    skype: 'johndoe',
    telegram: '@johndoe',
    twitter: '@johndoe',
  };
  const userInfo = getUserInfo(user);
  console.log(userInfo);
  