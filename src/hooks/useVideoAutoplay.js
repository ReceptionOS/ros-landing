import { useRef, useEffect, useState } from "react"

export const useVideoAutoplay = (autoPlay = true, onEnded) => {
  const ref = useRef()
  const videoRef = useRef()
  const [load, setLoad] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)

  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setLoad(true)
            io.disconnect()
          }
        })
      },
      { rootMargin: "200px" }
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (videoRef.current && load) {
      const video = videoRef.current

      // Attach onEnded callback if provided
      if (onEnded) {
        video.addEventListener("ended", onEnded)
      }

      // Only auto-play if autoPlay is true
      if (autoPlay) {
        const playPromise = video.play()

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setShowPlayButton(false)
            })
            .catch(error => {
              console.log("Autoplay prevented, showing play button")
              setShowPlayButton(true)
            })
        }
      } else {
        // If not auto-playing, show play button
        setShowPlayButton(true)
      }

      // Cleanup function
      return () => {
        if (onEnded) {
          video.removeEventListener("ended", onEnded)
        }
      }
    }
  }, [load, autoPlay, onEnded])

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setShowPlayButton(false)
        })
        .catch(error => {
          console.log("Play failed:", error)
        })
    }
  }

  return {
    ref,
    videoRef,
    load,
    showPlayButton,
    handlePlayClick,
  }
}
