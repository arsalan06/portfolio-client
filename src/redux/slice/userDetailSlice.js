import { api_base_url } from "@/constant/constant";
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
export function userDetailAction(name) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${api_base_url}userDetail/?userName=${name}`
      );
      dispatch(userDetailSlice.actions.getUserDetail(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
}
