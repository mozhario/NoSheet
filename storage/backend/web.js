import { encryptData, decryptData } from '../encryption';

export const WebStorage = {
    async getItem(key) {
        const data = localStorage.getItem(key);
        return data ? decryptData(data) : null;
    },
    async setItem(key, value) {
        const data = encryptData(value);
        localStorage.setItem(key, data);
    },
};
