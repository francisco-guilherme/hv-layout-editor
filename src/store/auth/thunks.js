import { authenticate } from "lib/api/auth";
import { setCookie, removeCookie, getCookie } from "lib/utils/cookie";
import { setIsAuthed, setAuthStatus } from "./actions";

const login = credentials => async dispatch => {
  dispatch(setAuthStatus("pending"));
  try {
    const token = await authenticate(credentials);
    setCookie({
      key: "token",
      value: token
    });
    dispatch(setAuthStatus("success"));
    dispatch(setIsAuthed(true));
    setTimeout(() => {
      dispatch(setAuthStatus("idle"));
    }, 2000);
  } catch (error) {
    dispatch(setAuthStatus("error"));
    setTimeout(() => {
      dispatch(setAuthStatus("idle"));
    }, 2000);
  }
};

const logout = () => dispatch => {
  removeCookie("token");
  dispatch(setIsAuthed(false));
};

const checkAuth = () => dispatch => {
  const token = getCookie("token");
  dispatch(setIsAuthed(Boolean(token)));
};

export { login, logout, checkAuth };
