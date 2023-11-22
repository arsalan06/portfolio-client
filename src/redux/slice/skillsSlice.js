import { api_base_url } from "@/constant/constant";
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
        `${api_base_url}getSkills?userName=${name}`
      );
      dispatch(skillsSlice.actions.getSkillsData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
}
