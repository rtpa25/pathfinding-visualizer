import { configureStore } from "@reduxjs/toolkit";
import isMouseDownReducers from "./slices/isMouseDownSlice";
import nodeReducers from "./slices/nodeSlice";

export const store = configureStore({
	reducer: {
		isMouseDown: isMouseDownReducers,
		nodes: nodeReducers,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
