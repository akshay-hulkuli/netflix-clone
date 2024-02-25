import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../customHooks/useTrailerVideo";

const VedioBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.trailer);
  useTrailerVideo(movieId);

  return (
    <div className="w-full aspect-auto">
      {trailer && (
        <iframe
          className="w-full aspect-video"
          src={"https://www.youtube.com/embed/" + trailer.key+"?autoplay=1&mute=1&loop=1&controls=0"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default VedioBackground;
