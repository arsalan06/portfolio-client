import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  userDetail: {},
};

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    getUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});
export default userDetailSlice.reducer;
export function userDetailAction(userName) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:7700/api/v1/userDetail/?userName=${userName}`
      );
      dispatch(userDetailSlice.actions.getUserDetail(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
}
