import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface isMouseDownState {
	value: boolean;
}

// Define the initial state using that type
const initialState: isMouseDownState = {
	value: false,
};

export const isMouseDownSlice = createSlice({
	name: "isMouseDown",
	initialState: initialState,
	reducers: {
		toggleIsMouseDown: (state: isMouseDownState) => {
			state.value = !state.value;
		},
	},
});

export const { toggleIsMouseDown } = isMouseDownSlice.actions;

export default isMouseDownSlice.reducer;
