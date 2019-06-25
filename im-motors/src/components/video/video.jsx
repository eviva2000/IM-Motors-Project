import React from "react";
import { Player } from "video-react";

export default props => {
  return (
    <Player autoPlay muted fluid="false" aspectRatio="16:9">
      <source src="http://artingineer.dk/video/instruction1.mov" />
    </Player>
  );
};
