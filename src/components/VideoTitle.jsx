import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-[20%] px-24 flex flex-col absolute text-white w-full aspect-video bg-gradient-to-t from-black">
      <span className="text-6xl font-bold p-3">{title}</span>
      <span className="text-xl p-3 w-1/2">{overview}</span>
      <div className="p-3 flex">
        <button className="py-2 w-44 m-2 rounded-md bg-opacity-90 bg-zinc-300 text-black hover:bg-opacity-70">
          Play
        </button>
        <button className="py-2 w-44 m-2 rounded-md bg-zinc-500 bg-opacity-70 hover:bg-opacity-90 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0,0,256,256"
            className="mx-3 mr-5"
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontweight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM25,11c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3zM21,21v2h1h1v13h-1h-1v2h1h1h4h1h1v-2h-1h-1v-15h-1h-4z"></path>
              </g>
            </g>
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
