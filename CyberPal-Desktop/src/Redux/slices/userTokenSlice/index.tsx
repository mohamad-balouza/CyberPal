import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface userTokenState {
  access_token: string,
  token_type: string
}

const initialState: userTokenState = {
  access_token: "",
  token_type: "Bearer"
}

export const userTokenSlice = createSlice({
  name: 'userToken',
  initialState,
  reducers: {
    changeToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    changeTokenType: (state, action: PayloadAction<string>) => {
        state.token_type = action.payload;
    }
  },
})

export const { changeToken, changeTokenType } = userTokenSlice.actions

export default userTokenSlice.reducer