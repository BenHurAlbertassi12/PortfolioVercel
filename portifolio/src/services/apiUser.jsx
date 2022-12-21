const opUser = 'user';
const timer = 1500;
const success = 'ok';

const readUser = () => JSON.parse(localStorage.getItem(opUser));
const saveUser = (newUser) =>
  localStorage.setItem(opUser, JSON.stringify(newUser));

const simulateRequest = (response) =>
  new Promise((callback) => {
    setTimeout(() => {
      callback(response);
    }, timer);
  });

export const apiUser = () =>
  new Promise((resolve) => {
    let user = readUser();
    if (user === undefined) {
      user = {};
    }
    simulateRequest(user)(resolve);
  });

export const createUser = (user) =>
  new Promise((resolve) => {
    const blankUser = {
      name: '',
      email: '',
    };
    saveUser({ ...blankUser, ...user });
    simulateRequest(success)(resolve);
  });

export const upUser = (upUser) =>
  new Promise((resolve, reject) => {
    saveUser({ ...upUser });
    simulateRequest(success)(resolve);
  });
