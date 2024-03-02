import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomoingMovies from "../customHooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const BrowseComponent = () => {
  const gptReducer = useSelector((state) => state.gpt);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomoingMovies();
  return (
    <div>
      <Header isBrowse={true} />
      {gptReducer.isOpen ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default BrowseComponent;
