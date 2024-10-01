import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QueryResultFooterData } from '@/components/Footer/types'

const initialState: QueryResultFooterData['footer'] = {
  logo: {
    url: '',
  },
  columns: [],
  cta: {
    buttonText: '',
    placeholderText: '',
    title: '',
  },
  copyright: {
    copyrightText: '',
    year: '',
  },
}

const footerDataSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {
    setFooterData(
      state,
      action: PayloadAction<QueryResultFooterData['footer']>,
    ) {
      return action.payload
    },
  },
})

export const { setFooterData } = footerDataSlice.actions

export default footerDataSlice.reducer
