import CryptoJS from 'crypto-js';


// TODO implement secret key stuff
const secretKey = 'your_secret_key';


export const encryptData = (data) => {
    return data;
    // return CryptoJS.AES.encrypt(
    //     JSON.stringify(data),
    //     secretKey,
    // ).toString();
};

export const decryptData = (ciphertext) => {
    return ciphertext;
    // const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    // const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    // return JSON.parse(decryptedData);
};
