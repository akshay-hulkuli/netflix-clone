import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const BrowseComponent = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header isBrowse={true} />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default BrowseComponent;
