export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';

const setItem = (key:string, value:string) => {
  window?.localStorage?.setItem(key, value);
};

const getItem = (key:string): string | null => {
  let value: string | null = '';
  if (typeof window !== 'undefined') {
    value = window?.localStorage?.getItem(key);
  }
  return value;
};

const removeItem = (key:string) => {
  localStorage.removeItem(key);
}

const storageFC = {
  setItem,
  getItem,
  removeItem
};

export default storageFC;
