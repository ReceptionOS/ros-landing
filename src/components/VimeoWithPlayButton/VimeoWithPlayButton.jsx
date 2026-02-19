import React, { useState, useRef, useEffect } from "react"
import { VimeoContainer } from "./styled.components"
import PlayButton from "../PlayButton/PlayButton"

const VimeoWithPlayButton = React.forwardRef(({ videoId, className }, ref) => {
  const [showPlayButton, setShowPlayButton] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [isPlaying, setIsPlaying] = useState(false)
  const iframeRef = useRef(null)

  const embedUrl = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&playsinline=1&controls=1&title=0&byline=0&portrait=0`

  const handlePlayClick = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ method: "play" }),
        "*"
      )
      setShowPlayButton(false)
      setIsPlaying(true)
    }
  }

  React.useImperativeHandle(ref, () => ({
    pause: () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ method: "pause" }),
          "*"
        )
        setShowPlayButton(true)
        setIsPlaying(false)
      }
    }
  }))

  useEffect(() => {
    const handleMessage = event => {
      if (event.origin !== "https://player.vimeo.com") return

      try {
        const data = JSON.parse(event.data)

        if (data.event === "play") {
          setShowPlayButton(false)
          setIsPlaying(true)
        } else if (data.event === "pause") {
          setShowPlayButton(true)
          setIsPlaying(false)
        }
      } catch (error) {
        // Ignore parsing errors
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <VimeoContainer className={className}>
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title="ReceptionOS Demo"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
      {showPlayButton && <PlayButton onClick={handlePlayClick} />}
    </VimeoContainer>
  )
})

VimeoWithPlayButton.displayName = "VimeoWithPlayButton"

export default VimeoWithPlayButton
