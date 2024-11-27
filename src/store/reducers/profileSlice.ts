import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ProfileSliceType = {
  profile: {
    profileImage: string | null
  }
}

const initialState: ProfileSliceType = {
  profile: {
    profileImage: null,
  },
}

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<ProfileSliceType['profile']>) {
      state.profile = action.payload
    },
  },
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer
