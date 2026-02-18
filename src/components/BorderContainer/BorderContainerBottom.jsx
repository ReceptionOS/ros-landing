import React from "react"

export const BorderContainerBottom = ({ className }) => {
  return (
    <div className={`border-container-bottom ${className || ""}`}>
      <svg
        className="border-container-bottom-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="897"
        height="32"
        viewBox="0 0 897 32"
        fill="none"
      >
        <path
          d="M896.5 0.5L896.5 14.5L868.5 24.4999L811 24.5L780 30.4999L780 24.5L29.5 24.5L0.500001 14.5001L0.5 0.500084"
          stroke="#302C29"
          strokeLinecap="round"
        />
      </svg>
      <style jsx="true">{`
        .border-container-bottom {
          position: relative;
          bottom: 2px;
          width: 100%;
          max-width: 897px;
        }

        .border-container-bottom-svg {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </div>
  )
}
