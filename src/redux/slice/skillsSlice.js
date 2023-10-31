import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  skillsData: [],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    getSkillsData: (state, action) => {
      state.skillsData = action.payload;
    },
  },
});
export default skillsSlice.reducer;
export function skillsDataAction(name) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:7700/api/v1/getSkills?userName=${name}`
      );
      dispatch(skillsSlice.actions.getSkillsData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
}
