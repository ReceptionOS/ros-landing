import React from "react"

export const BorderContainerTop = ({ className }) => {
  return (
    <div className={`border-container-top ${className || ""}`}>
      <svg
        className="border-container-top-svg"
        width="961"
        height="32"
        viewBox="0 0 961 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 30.606V16.606L28.5 6.60608H86L117 0.606083V6.60608L931.5 6.60608L960.5 16.606V30.606"
          stroke="#302C29"
          stroke-linecap="round"
        />
      </svg>
      <style jsx="true">{`
        .border-container-top {
          position: relative;
          top: 2px;
          width: 100%;
          max-width: 960px;
        }

        .border-container-top-svg {
          width: 100%;
          height: auto;
          display: block;
          opacity: 1;
        }

        .border-container-top-svg path {
          stroke-opacity: 1 !important;
          stroke: #302c29 !important;
        }
      `}</style>
    </div>
  )
}
