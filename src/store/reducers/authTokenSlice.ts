import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthTokenSliceType = {
  authToken: null | string
  isAuthorized: boolean
}

const initialState: AuthTokenSliceType = {
  authToken: null,
  isAuthorized: false,
}

const authTokenSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    setAuthToken(state, action: PayloadAction<string | null>) {
      state.authToken = action.payload
      state.isAuthorized = action.payload !== null
    },
  },
})

export const { setAuthToken } = authTokenSlice.actions

export default authTokenSlice.reducer
