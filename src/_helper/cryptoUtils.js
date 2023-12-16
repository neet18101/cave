import { AES, enc } from "crypto-js";

export const encryptData = (data, secretKey) => {
  return AES.encrypt(JSON.stringify(data), secretKey).toString();
};

export const decryptData = (encryptedData, secretKey) => {
  try {
    const bytes = AES.decrypt(encryptedData, secretKey);
    return JSON.parse(bytes.toString(enc.Utf8));
  } catch (error) {
    console.error("Error during decryption:", error);
    // Handle the error by returning a default value or rethrowing the error
    return null;
  }
};
