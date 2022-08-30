import React, { useState } from "react";
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import { Button } from "reactstrap";

const sources = {
  sintelTrailer: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  bunnyTrailer: "https://media.w3.org/2010/05/bunny/trailer.mp4",
  bunnyMovie: "https://media.w3.org/2010/05/bunny/movie.mp4",
  test: "https://media.w3.org/2010/05/video/movie_300.webm",
};

export default function App() {
  const [player, setPlayer] = useState();
  const [source, setSource] = useState(sources.bunnyTrailer);
  const play = () => {
    player.play();
  };

  const pause = () => {
    player.pause();
  };

  const load = () => {
    player.load();
  };

  return (
    <div>
      <Player
        ref={(player) => {
          setPlayer(player);
        }}
      >
        <source src={source} />
        <ControlBar autoHide={false} />
      </Player>
      <div className="py-3">
        <Button className="mr-3" onClick={play}>
          play()
        </Button>
        <Button className="mr-3" onClick={pause}>
          pause()
        </Button>
        <Button className="mr-3" onClick={load}>
          load()
        </Button>
      </div>
      <div className="pb-3">
        <Button
          onClick={() => {
            setSource(sources.sintelTrailer);
          }}
          className="mr-3"
        >
          sintel teaser
        </Button>
        <Button
          onClick={() => {
            setSource(sources.bunnyTrailer);
          }}
          className="mr-3"
        >
          bunny trailer
        </Button>
        <Button
          onClick={() => {
            setSource(sources.bunnyMovie);
          }}
          className="mr-3"
        >
          bunny movie
        </Button>
        <Button
          onClick={() => {
            setSource(sources.test);
          }}
          className="mr-3"
        >
          test movie
        </Button>
      </div>
    </div>
  );
}
