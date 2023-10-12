import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;

// export function getClientsList(handleClientsResponse) {
//   return async () => {
//     try {
//       const tokenStorge = JSON.parse(
//         localStorage.getItem("okta-token-storage")
//       );
//       const response = await axios.get(`/clients?offset=0&limit=100`, {
//         headers: {
//           Authorization: `Bearer ${tokenStorge?.accessToken?.accessToken}`,
//         },
//       });
//       dispatch(slice.actions.getClientsSuccess(response.data.items));
//       handleClientsResponse();
//     } catch (error) {
//       handleClientsResponse();
//       console.log(error);
//     }
//   };
// }