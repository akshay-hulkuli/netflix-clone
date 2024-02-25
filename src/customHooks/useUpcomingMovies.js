import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addPopularMovies } from "../utils/movieSlice"

const useUpcomoingMovies = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getPopularMovies()
  }, [])

  const getPopularMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      API_OPTIONS
    )
    const json = await data.json()
    console.log(json)
    dispatch(addPopularMovies(json.results))
  }
}

export default useUpcomoingMovies;