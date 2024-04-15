import axios from "axios";
export const homeService = { getAllCollege };

async function getAllCollege() {
  return await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/home-page`);
}
