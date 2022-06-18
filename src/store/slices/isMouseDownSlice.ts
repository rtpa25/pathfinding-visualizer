import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IsMouseDownState {
	value: boolean;
}

// Define the initial state using that type
const initialState: IsMouseDownState = {
	value: false,
};

export const isMouseDownSlice = createSlice({
	name: "isMouseDown",
	initialState: initialState,
	reducers: {
		toggleIsMouseDown: (state: IsMouseDownState) => {
			state.value = !state.value;
		},
	},
});

export const { toggleIsMouseDown } = isMouseDownSlice.actions;

export default isMouseDownSlice.reducer;
