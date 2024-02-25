import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailer: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      return { ...state, nowPlayingMovies: action.payload }
    },
    addPopularMovies: (state, action) => {
      return { ...state, popularMovies: action.payload }
    },
    addTopRatedMovies: (state, action) => {
      return { ...state, topRatedMovies: action.payload }
    },
    addUpcomingMovies: (state, action) => {
      return { ...state, upcomingMovies: action.payload }
    },
    addTrailer: (state, action) => {
      return { ...state, trailer: action.payload }
    }
  }
})

export const { addNowPlayingMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions

export default movieSlice.reducer
