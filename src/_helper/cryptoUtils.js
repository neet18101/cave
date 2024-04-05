import { AES, enc } from "crypto-js";

export const encryptData = (data, secretKey) => {
  return AES.encrypt(JSON.stringify(data), secretKey).toString();
};
const userData =
  "U2FsdGVkX1/AqxeZjfXt5QumnI69b4fyPErHhIlb+YJWpqbfF4Wk5MaT/UG0ZgnfvXiJ+ruaRsFyTXTtEsQ9112oGjg4WbIR0Q6pfUMJ8Fp3KiRsA+vyBXePH3kWLFYQ/3FgY15ICnAH693fEHZNcM1NMSLZLivEH1AzEZIq46wry+dLrKrBLLSYOFRAxBIWNN1z5Yzlt7izH3WAdnJQj3bqjweVz0B6Seb1022CSaqwqshyqxaNx/PvuwaTJhe0DgJkgY00PDlQHYQprvUXsbtGwWk12WasbzicGmREqOHeljUgZHBJ/zCjS9JKxoRF9QWIWxN0lsiYDQS0PQDUM0AZ0H3R6lsppdRrsVGZfTf4twkfy8DPTb7pB6dtus0RPijFL12vgZbdiwNj/0MzrrC7p0JpskFikYc/4Ytb3nOIgKKn8ODfNx6EbIzWatU3NUSqNlMsV4OEt24Wp/l4SlJgrwQpRgT0/HyXtpwSJSk=";
const userKey = "luciferlord0123456789";

export const decryptData = (encryptedData, userKey) => {
  try {
    // console.log(encryptData)
    const bytes = AES.decrypt(encryptedData, userKey);
    return JSON.parse(bytes.toString(enc.Utf8));
  } catch (error) {
    console.error("Error during decryption:", error);
    // Handle the error by returning a default value or rethrowing the error
    return null;
  }
};


