import Cookies from "js-cookie";

export const getCookie = key => Cookies.get(key);

export const setCookie = ({ key, value }) => Cookies.set(key, value);

export const removeCookie = key => Cookies.remove(key);
