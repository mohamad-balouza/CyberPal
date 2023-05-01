import { configureStore } from '@reduxjs/toolkit';
import currentPageSlice from '../slices/currentPageSlice';

export const store = configureStore({
  reducer: {
    currentPage: currentPageSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch