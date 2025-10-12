import React from "react";
import { LocalVideoSection } from "./styled.components";
import { useVideoAutoplay } from "../../hooks/useVideoAutoplay";
import PlayButton from "../PlayButton/PlayButton";

const LocalVideo2 = ({ src, poster, className }) => {
  const { ref, videoRef, load, showPlayButton, handlePlayClick } = useVideoAutoplay();

  return (
    <LocalVideoSection ref={ref} className={className || ""} style={{ position: 'relative' }}>
      {load ? (
        <>
          <video
            ref={videoRef}
            muted
            playsInline
            loop
            style={{ width: '100%', display: 'block' }}
          >
            {src && <source src={src} type="video/mp4" />}
          </video>
          {showPlayButton && <PlayButton onClick={handlePlayClick} />}
        </>
      ) : (
        <img src={poster} alt="" style={{ width: "100%", display: "block" }} />
      )}
    </LocalVideoSection>
  );
};

export default LocalVideo2;