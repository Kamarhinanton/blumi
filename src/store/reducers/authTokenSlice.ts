import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthTokenSliceType = {
  isAuthorized: boolean
}

const initialState: AuthTokenSliceType = {
  isAuthorized: false,
}

const authTokenSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    setIsAuthorized(state, action: PayloadAction<boolean>) {
      state.isAuthorized = action.payload
    },
  },
})

export const { setIsAuthorized } = authTokenSlice.actions

export default authTokenSlice.reducer
