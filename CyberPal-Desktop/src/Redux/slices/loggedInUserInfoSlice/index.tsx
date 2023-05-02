import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoggedInUserInfoState {
  user_type: string,
  username: string
}

const initialState: LoggedInUserInfoState = {
  user_type: "Beginner",
  username: "John Doe"
}

export const loggedInUserInfoSlice = createSlice({
  name: 'loggedInUserInfo',
  initialState,
  reducers: {
    changeLoggedInUserType: (state, action: PayloadAction<string>) => {
      state.user_type = action.payload;
    },
    changeLoggedInUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
})

export const { changeLoggedInUserType, changeLoggedInUserName } = loggedInUserInfoSlice.actions

export default loggedInUserInfoSlice.reducer