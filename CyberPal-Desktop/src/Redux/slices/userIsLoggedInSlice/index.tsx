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
    changeLoggedInStateToTrue: (state) => {
      state.value = true;
    },
    changeLoggedInStateToFalse: (state) => {
      state.value = false;
    },
  },
})

export const { changeLoggedInStateToTrue, changeLoggedInStateToFalse } = UserIsLoggedInSlice.actions

export default UserIsLoggedInSlice.reducer