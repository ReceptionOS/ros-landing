import React from "react"

export const BorderContainerBottom = ({ className }) => {
  return (
    <div className={`border-container-bottom ${className || ""}`}>
      <svg
        className="border-container-bottom-svg border-container-bottom-desktop-svg"
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
      <svg
        className="border-container-bottom-svg border-container-bottom-mobile-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="351"
        height="31"
        viewBox="0 0 351 31"
        fill="none"
      >
        <path
          d="M350.5 0.5L350.5 14.5L322.5 24.4999L265 24.5L234 30.4999L234 24.5L29.5 24.5L0.500001 14.5001L0.5 0.500084"
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

        .border-container-bottom-desktop-svg {
          display: block !important;
        }

        .border-container-bottom-mobile-svg {
          display: none !important;
        }

        @media only screen and (max-width: 890px) {
          .border-container-bottom-desktop-svg {
            display: none !important;
          }
          .border-container-bottom-mobile-svg {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
}
