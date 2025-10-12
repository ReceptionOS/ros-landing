import React, { useRef, useEffect, useState } from 'react';
import { GifSection } from './styled.components';

const GifComponent = ({ src, className }) => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      const handlePlay = () => {
        setIsPlaying(true);
        setShowPlayButton(false);
      };

      const handlePause = () => {
        setIsPlaying(false);
        setShowPlayButton(true);
      };

      // Try to play the video
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setShowPlayButton(false);
          })
          .catch((error) => {
            console.log('GIF autoplay prevented:', error);
            setShowPlayButton(true);
            setIsPlaying(false);
          });
      }

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

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
    <GifSection className={className} style={{ position: 'relative' }}>
      <video ref={videoRef} loop muted playsInline style={{ width: '100%', height: '100%' }}>
        <source src={src} type="video/mp4" />
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
    </GifSection>
  );
};

export default GifComponent;
