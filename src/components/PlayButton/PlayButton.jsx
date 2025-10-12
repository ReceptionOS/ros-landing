import React from 'react';

const PlayButton = ({ onClick }) => (
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
        onClick={onClick}
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
);

export default PlayButton;
