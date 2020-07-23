import jwt from "jsonwebtoken";

const authenticate = async credentials =>
  new Promise((resolve, reject) => {
    const { username, password } = credentials;
    if (username !== "admin" || password !== "password") reject();

    const token = jwt.sign(credentials, "someSecret");
    setTimeout(() => resolve(token), 500);
  });

const recoverPassword = async email =>
  new Promise((resolve, reject) => {
    if (!email.length) reject();

    setTimeout(() => resolve(), 500);
  });

export { authenticate, recoverPassword };
