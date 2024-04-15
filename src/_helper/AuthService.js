import axios from "axios";
export const ownerService = {
  getOwnerDetails,
};

async function getOwnerDetails(ownerId) {
  return await axios.get(
    `${import.meta.env.VITE_API_URL}/api/v1/owner-details?ownerId=${ownerId}`,
    {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_TOKEN}` },
    }
  );
}

async function getCategoryAttributes(permalink) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/guide/1/${permalink}/attributes`,
    { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` } }

  );
}

// async function getTopGuideCount(permalink) {
//   return await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/guide/top-guide-counts/${permalink}`,
//     { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` } }

//   );
// }
