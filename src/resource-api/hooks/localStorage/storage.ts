import {languageLocaleDefault} from '@constants/index';

export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';
export const KEY_PAIR = 'key_pair';
export const USER_INFO = 'user_info';
export const LANGUAGE_LOCALE = 'LANGUAGE_LOCALE';
export const CURRENCY = 'currency';

const setItem = (key, value) => {
  window?.localStorage?.setItem(key, value);
};

const getItem = (key) => {
  let value = '';
  if (typeof window !== 'undefined') {
    value = window?.localStorage?.getItem(key);
  }
  return value;
};

const setAccessToken = (value) => {
  setItem(ACCESS_TOKEN, value);
};
const setRefreshToken = (value) => {
  setItem(REFRESH_TOKEN, value);
};
const setKpData = (value) => {
  setItem(KEY_PAIR, value);
};

const setUserInfo = (value) => {
  setItem(USER_INFO, value);
};

const setLanguageLocale = (value) => {
  setItem(LANGUAGE_LOCALE, value);
};

const setCurrency = (value) => {
  setItem(CURRENCY, JSON.stringify(value));
};

const clearToken = () => setAccessToken('');
const clearAll = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(KEY_PAIR);
  localStorage.removeItem(USER_INFO);
  localStorage.removeItem(LANGUAGE_LOCALE);
};

const getAccessToken = () => getItem(ACCESS_TOKEN);
const getRefreshToken = () => getItem(REFRESH_TOKEN);
const getKpData = () => getItem(KEY_PAIR);
const getUserInfo = () => getItem(USER_INFO);
const getLanguageLocale = () => getItem(LANGUAGE_LOCALE) || languageLocaleDefault;

const getCurrency = () => {
  return getItem(CURRENCY) ? JSON.parse(getItem(CURRENCY)) : getItem(CURRENCY);
};

const storageFC = {
  setItem,
  getItem,
  setAccessToken,
  clearToken,
  getAccessToken,
  getRefreshToken,
  setRefreshToken,
  setKpData,
  getKpData,
  setUserInfo,
  getUserInfo,
  clearAll,
  setLanguageLocale,
  getLanguageLocale,
  getCurrency,
  setCurrency,
};

export default storageFC;
