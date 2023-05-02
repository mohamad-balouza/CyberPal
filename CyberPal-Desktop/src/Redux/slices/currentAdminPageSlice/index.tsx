import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentAdminPageState {
  value: string
}

const initialState: CurrentAdminPageState = {
  value: "Manage Users",
}

export const currentAdminPageSlice = createSlice({
  name: 'currentAdminPage',
  initialState,
  reducers: {
    changeCurrentAdminPage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
})

export const { changeCurrentAdminPage } = currentAdminPageSlice.actions

export default currentAdminPageSlice.reducer