import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_AUTO_CHECK
} from "./constants";

/**
 * Dispatched when user login fails
 *
 * @param  {object} error The error object
 *
 * @return {object} An action object with a type of LOGIN_FAIL passing the error
 */
export function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error
  };
}

/**
 * Dispatched when user login starts
 *
 * @param  {string} emailOrUsername The email/username  of the user
 * @param  {string} password The password of the user
 *
 * @return {object} An action object with a type of LOGIN_START passing the email and password
 */
export function loginStart(emailOrUsername, password) {
  return {
    type: LOGIN_START,
    emailOrUsername: emailOrUsername,
    password: password
  };
}

/**
 * Dispatched when logging the user is successful
 *
 * @param  {string} token JWT Token returned by the server
 * @param  {string} username Username of the user being logged in
 *
 * @return {object} An action object with a type of LOGIN_SUCCESS passing the token
 */
export function loginSuccess(token, username) {
  return {
    type: LOGIN_SUCCESS,
    token,
    username
  };
}

/**
 * Dispatched when the user clicks logout
 *
 * @return {object} An action object with a type of LOGOUT
 */
export function logout() {
  return {
    type: LOGOUT
  };
}

/**
 * Dispatched whenever the App(root) component is rendered to check the authentication of the user
 *
 * @return {object} An action object with a type of LOGIN_AUTO_CHECK
 */
export const loginAutoCheck = () => {
  return {
    type: LOGIN_AUTO_CHECK
  };
};
