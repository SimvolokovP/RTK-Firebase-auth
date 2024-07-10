import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: null, token: null, email: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserToStore(state, actions) {
      console.log(actions.payload)
      state.id = actions.payload.id;
      state.token = actions.payload.token;
      state.email = actions.payload.email;
    },

    removeUserFromStore(state) {
      state.id = null;
      state.token = null;
      state.email = null;
    },
  },
});

export default userSlice.reducer;
export const {addUserToStore, removeUserFromStore} = userSlice.actions