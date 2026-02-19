import React from "react"

export const BorderContainerSidesTopBottomSmaller = ({
  children,
  className
}) => {
  return (
    <div className={`border-container-sides-top-bottom-smaller ${className}`}>
      <svg
        className="sides-svg"
        width="961"
        height="374"
        viewBox="0 0 961 374"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0.5V40.5L52 92V373"
          stroke="url(#paint0_linear_1405_12480)"
          strokeLinecap="round"
        />
        <path
          d="M960.5 0.5V40.5L909 92V373"
          stroke="url(#paint1_linear_1405_12480)"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1405_12480"
            x1="26.25"
            y1="0.5"
            x2="26.25"
            y2="373"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#302C29" />
            <stop offset="1" stopColor="#302C29" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1405_12480"
            x1="934.75"
            y1="0.5"
            x2="934.75"
            y2="373"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#302C29" />
            <stop offset="1" stopColor="#302C29" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="sides-content">{children}</div>
      <style jsx="true">{`
        .border-container-sides-top-bottom-smaller {
          position: relative;
          width: 100%;
          max-width: 961px;
        }

        .sides-svg {
          width: 100%;
          height: auto;
          position: absolute;
          top: -5px;
          left: 0;
          pointer-events: none;
        }

        .sides-content {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  )
}
