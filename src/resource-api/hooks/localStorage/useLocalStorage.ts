import storageFC from './storage'

const useLocalStorage = () => {
  const setValue = (key: string, value: string) => {
    storageFC.setItem(key, value);
  }
  const getValue = (key: string) => {
    storageFC.getItem(key);
  }
  const removeItem = (key: string) => {
    storageFC.removeItem(key);
  }
  return {setValue, getValue, removeItem}

}
export default useLocalStorage