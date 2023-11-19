import { configureStore } from "@reduxjs/toolkit";

// Slices
import userSlice from "./slices/userSlice";
import usersSlice from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    users: usersSlice,
  },
});

export default store;
