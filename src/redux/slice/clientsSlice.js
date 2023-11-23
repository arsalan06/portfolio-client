import { api_base_url } from "@/constant/constant";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  clientsReview: [],
};

const clientsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    getClientReview: (state, action) => {
      state.clientsReview = action.payload;
    },
  },
});
export default clientsSlice.reducer;
export function ClientReviewAction(name) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${api_base_url}getClientReview?userName=${name}`
      );
      dispatch(clientsSlice.actions.getClientReview(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
}
