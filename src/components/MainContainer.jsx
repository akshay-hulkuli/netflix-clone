import React from "react";
import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const mainMovie = useSelector((store) => store.movies?.nowPlayingMovies?.[3]);
  if(!mainMovie) return;
  console.log(mainMovie)
  return (
    <div className="">

      <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview}/>
      <VedioBackground movieId={mainMovie.id}/>
    </div>
  );
};

export default MainContainer;
