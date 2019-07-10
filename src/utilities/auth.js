const DELAY = 2;

const USERS = [];

const generateToken = () => Math.floor(100000 + Math.random() * 900000).toString();

const wait = (sec) => new Promise((resolve) => setTimeout(resolve, sec * 1000));

export const createNewUser = async ({ username, email, password }) => {
  await wait(DELAY);
  const canCreate = USERS.every(u => u.username !== username && u.email !== email);
  if (!canCreate) {
    throw new Error('Email or username already used');
  } else {
    const token = generateToken();
    const newUser = { username, email, password, token };
    USERS.push(newUser);
    console.log(`Token: ${token}`);
    return { username, email };
  }
};

export const authenticateUser = async ({ email = '', password = '' }) => {
  await wait(DELAY);
  const authenticatedUser = USERS.find(u => u.email === email && u.password === password);
  if (!authenticatedUser) {
    throw new Error('Email or password incorrect');
  } else {
    return { username: authenticatedUser.username, email };
  }
};

export const authenticateToken = async ({ email, token }) => {
  await wait(DELAY);
  const validUser = USERS.find(u => u.email === email && u.token === token);
  if (!validUser) {
    throw new Error('Token incorrect or expired');
  } else {
    return { username: validUser.username, email };
  }
};
