import { EncryptStorage } from 'encrypt-storage';

export const encryptStorageAdmin = new EncryptStorage(process.env.REACT_APP_STORAGE_KEY, {
  prefix: '@nimda'
});