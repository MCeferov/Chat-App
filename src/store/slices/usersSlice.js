import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const usersSliceActions = usersSlice.actions;

export default usersSlice.reducer;
