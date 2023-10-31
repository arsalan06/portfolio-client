import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  userData: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLogin: (state, action) => {
      state.userData = action.payload;
    },
  },
});
export default loginSlice.reducer;
export function loginAction(values, router) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:7700/api/v1/login`,
        values
      );
      dispatch(loginSlice.actions.getLogin(response.data.data));
      if (response) {
        localStorage.setItem("userName", response?.data?.data?.user?.userName);
        {
          router.push(`/home/${response?.data?.data?.user?.userName}`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}
