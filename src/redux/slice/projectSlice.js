import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  projectData: [],
};

const projectsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    getProjectssData: (state, action) => {
      state.projectData = action.payload;
    },
  },
});
export default projectsSlice.reducer;
export function projectsDataAction(name) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:7700/api/v1/getProject?userName=${name}`
      );
      dispatch(projectsSlice.actions.getProjectssData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
}
