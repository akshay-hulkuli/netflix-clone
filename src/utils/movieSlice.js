import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: {
    nowPlayingMovies: null,
    trailer: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      return { ...state, nowPlayingMovies: action.payload }
    },
    addTrailer: (state, action) => {
      return { ...state, trailer: action.payload }
    }
  }
})

export const { addNowPlayingMovies, addTrailer } = movieSlice.actions

export default movieSlice.reducer
