import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserIsLoggedInState {
  value: boolean
}

const initialState: UserIsLoggedInState = {
  value: false,
}

export const UserIsLoggedInSlice = createSlice({
  name: 'userIsLoggedIn',
  initialState,
  reducers: {
    changeLoggedInState: (state) => {
      state.value = !state.value;
    },
  },
})

export const { changeLoggedInState } = UserIsLoggedInSlice.actions

export default UserIsLoggedInSlice.reducer