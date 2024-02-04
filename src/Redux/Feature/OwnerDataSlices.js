import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  userData: [],
  is_success: "",
  error: "",
  data: [
    {
      propertyData: {},
      localityDetails: {},
      rentalDetail: {},
      amenities: {},
      gallery: [],
      scheduleVisit: {},
    },
  ],
};
const config = {
  headers: { Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_TOKEN}` },
};

// Async thunk for owner registration
export const ownerDataRegister = createAsyncThunk(
  "user/addOwner",
  async (values) => {
    try {
      // console.log(values)
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/register`,
        values,
        config
      );

      console.log(response.data);

      return response.data;
    } catch (error) {
      // Handle errors based on your application's requirements
      throw new Error("Failed to add user");
    }
  }
);

export const ownerDataSlice = createSlice({
  name: "ownerData",
  initialState,
  reducers: {
    addPropertyData: (state, action) => {
      const { key, value } = action.payload || {};
      if (key === 1) {
        state.data[0].propertyData = value;
      } else if (key === 2) {
        state.data[0].localityDetails = value;
      } else if (key === 3) {
        state.data[0].rentalDetail = value;
      } else if (key === 4) {
        state.data[0].amenities = value;
      } else if (key === 5) {
        state.data[0].gallery = value;
      } else if (key === 6) {
        state.data[0].scheduleVisit = value;
      } else {
        return state;
      }
    },
  },
  extraReducers: (builder) => {
    // add registration reducer
    builder.addCase(ownerDataRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ownerDataRegister.fulfilled, (state, action) => {
      // console.log(action.payload.type, "api response");
      if (action.payload.success === false) {
        toast.error(data.msg, {
          duration: 3000, // Toast will be shown for 3 seconds
        });
      } else if (action.payload.success === true) {
        state.userData.push(action.payload);
        if (action.payload.type === 2) {
          localStorage.setItem(
            "userInfo",
            JSON.stringify(action.payload.token)
          );
          const redirectPath =
            action.payload.success.propertyType === "pg"
              ? `/pglist/${action.payload.id}`
              : `/list-property/${action.payload.id}`;
          setTimeout(() => {
            window.location.href = redirectPath;
          }, 2000);
        } else {
          setTimeout(() => {
            window.location.href = "/login";
          }, 4000);
          toast.success(data.msg, {
            duration: 3000, // Toast will be shown for 3 seconds
          });
        }
      }
      state.loading = false;
      state.is_success = action.payload.msg;
    });
    builder.addCase(ownerDataRegister.rejected, (state, action) => {
      state.loading = false;
      state.userData = [];
      state.error = action.payload.message;
    });
  },
});

export const { addPropertyData } = ownerDataSlice.actions;
export default ownerDataSlice.reducer;
