import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentPageState {
  value: string
}

const initialState: CurrentPageState = {
  value: "Home",
}

export const currentPageSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeCurrentPage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
})

export const { changeCurrentPage } = currentPageSlice.actions

export default currentPageSlice.reducer