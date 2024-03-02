import { createSlice } from '@reduxjs/toolkit'

const GPTSlice = createSlice({
  name: 'gptSearch',
  initialState: {
    isOpen: false
  },
  reducers: {
    toggleOpenSearch: state => {
      return { ...state, isOpen: !state.isOpen }
    }
  }
})

export const { toggleOpenSearch } = GPTSlice.actions

export default GPTSlice.reducer
