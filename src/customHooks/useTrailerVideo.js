import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addTrailer } from '../utils/movieSlice'

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch()
  useEffect(() => {
    getMovieVedios()
  }, [])
  const getMovieVedios = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' +
        movieId +
        '/videos?language=en-US',
      API_OPTIONS
    )
    const json = await data.json()
    const trailer = json.results.find(res => res.type === 'Trailer')
    if (!trailer) {
      trailer = json.results[0]
    }
    dispatch(addTrailer(trailer))
  }
}

export default useTrailerVideo
