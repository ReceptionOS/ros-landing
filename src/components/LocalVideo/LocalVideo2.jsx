import React, { useRef, useEffect, useState } from "react";
import { LocalVideoSection } from "./styled.components";

const LocalVideo2 = ({ src, webmSrc, mp4Src, poster, className }) => {
  const ref = useRef();
  const videoRef = useRef();
  const [load, setLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setLoad(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current && load) {
      const video = videoRef.current;

      const handlePlay = () => {
        setIsPlaying(true);
        setShowPlayButton(false);
      };

      const handlePause = () => {
        setIsPlaying(false);
        setShowPlayButton(true);
      };

      const handleError = () => {
        video.style.display = "none";
        setShowPlayButton(false);
      };

      // Try to play the video
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started playing
            setIsPlaying(true);
            setShowPlayButton(false);
          })
          .catch((error) => {
            // Autoplay was prevented
            console.log('Autoplay prevented:', error);
            setShowPlayButton(true);
            setIsPlaying(false);
          });
      }

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('error', handleError);
      };
    }
  }, [load]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      }).catch((error) => {
        console.log('Play failed:', error);
      });
    }
  };

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
            {/* {mp4Src && <source src={mp4Src} type="video/mp4" />} */}
            {/* {webmSrc && <source src={webmSrc} type="video/webm" />} */}
            {src && <source src={src} type="video/mp4" />}
          </video>
          {showPlayButton && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                zIndex: 10,
                background: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s ease'
              }}
              onClick={handlePlayClick}
              onMouseEnter={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.9)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.7)'}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </>
      ) : (
        <img src={poster} alt="" style={{ width: "100%", display: "block" }} />
      )}
    </LocalVideoSection>
  );
};

export default LocalVideo2;
