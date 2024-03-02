import { configureStore } from '@reduxjs/toolkit'
import GPTSlice from './GPTSlice'
import movieSlice from './movieSlice'
import userSlice from './userSlice'

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    gpt: GPTSlice
  }
})

export default appStore
