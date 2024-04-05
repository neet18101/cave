import { configureStore } from "@reduxjs/toolkit";
import ownerDataSlice from "./Feature/OwnerDataSlices";

const store = configureStore({
  reducer: {
    ownerData: ownerDataSlice,
  },
});
export default store;
  