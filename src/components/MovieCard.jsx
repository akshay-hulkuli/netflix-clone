import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({movie}) => {

  return (
    <div className='pr-7'>
        <img className='min-w-48 max-h-64' src={IMG_CDN + movie.poster_path} alt="Movie card"/>
    </div>
  )
}

export default MovieCard