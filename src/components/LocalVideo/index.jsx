import React from "react"
import { LocalVideoSection } from "./styled.components"
import { useVideoAutoplay } from "../../hooks/useVideoAutoplay"
import PlayButton from "../PlayButton/PlayButton"

const LocalVideo = ({ src, className, autoPlay = true, onEnded }) => {
  const {
    ref,
    videoRef,
    load,
    showPlayButton,
    handlePlayClick,
    // eslint-disable-next-line no-unused-vars
    resetPlayButton
  } = useVideoAutoplay(autoPlay, onEnded)

  return (
    <LocalVideoSection
      ref={ref}
      className={className}
      style={{ position: "relative" }}
    >
      {load ? (
        <>
          <video
            ref={videoRef}
            muted
            playsInline
            style={{ width: "100%", height: "100%" }}
          >
            <source src={src} type="video/mp4" />
          </video>
          {showPlayButton && <PlayButton onClick={handlePlayClick} />}
        </>
      ) : (
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "#f0f0f0" }}
        />
      )}
    </LocalVideoSection>
  )
}

export default LocalVideo
