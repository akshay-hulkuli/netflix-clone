import React from 'react'
import { LOGIN_BG } from '../utils/constants'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import GPTSearchBar from './GPTSearchBar'

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute top-0 -z-10">
        <img
          src={LOGIN_BG}
          alt="background"
        />
      </div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearch