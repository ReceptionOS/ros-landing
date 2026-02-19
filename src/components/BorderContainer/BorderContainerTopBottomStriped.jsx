import React from "react"

export const BorderContainerTopBottomStriped = ({ children, className }) => {
  return (
    <div className={`border-container-top-bottom-striped ${className || ""}`}>
      <svg
        className="border-container-top-bottom-striped-svg"
        width="961"
        height="366"
        viewBox="0 0 961 366"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M32.5 341.5L32.4998 337.995L26.4998 306.949L32.4998 306.949L0.499991 197.539L0.5 0.500002"
          stroke="url(#paint0_linear_1415_12459)"
          strokeLinecap="round"
        />
        <path
          d="M928.5 341.5L928.5 338L934.5 307L928.5 307L960.5 197.75L960.5 0.999999"
          stroke="url(#paint1_linear_1415_12459)"
          strokeLinecap="round"
        />
        <rect
          x="32.5"
          y="341.5"
          width="896"
          height="24"
          fill="url(#pattern0_1415_12459)"
          stroke="#302C29"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1415_12459"
            x1="16.5"
            y1="-39.5587"
            x2="16.5"
            y2="494.725"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#302C29" stopOpacity="0" />
            <stop offset="0.360577" stopColor="#302C29" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1415_12459"
            x1="944.5"
            y1="-39"
            x2="944.5"
            y2="494.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#302C29" stopOpacity="0" />
            <stop offset="0.360577" stopColor="#302C29" />
          </linearGradient>
          <pattern
            id="pattern0_1415_12459"
            patternUnits="userSpaceOnUse"
            patternTransform="matrix(9 0 0 9 32.5 341.5)"
            preserveAspectRatio="none"
            viewBox="1.13411e-07 0 9 9"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#pattern0_1415_12459_inner"
              transform="translate(-9 -9)"
            />
            <use
              xlinkHref="#pattern0_1415_12459_inner"
              transform="translate(0 -9)"
            />
            <use
              xlinkHref="#pattern0_1415_12459_inner"
              transform="translate(-9 0)"
            />
            <g id="pattern0_1415_12459_inner">
              <line
                opacity="0.5"
                x1="9.35355"
                y1="0.353553"
                x2="0.353553"
                y2="9.35355"
                stroke="#302C29"
              />
            </g>
          </pattern>
        </defs>
      </svg>
      <div className="border-container-top-bottom-striped-content">
        {children}
      </div>
      <style jsx="true">{`
        .border-container-top-bottom-striped {
          position: relative;
          width: 100%;
          max-width: 959px;
          margin: 0 auto;
          bottom: -1px;
        }

        .border-container-top-bottom-striped-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .border-container-top-bottom-striped-content {
          position: absolute;
          top: 0;
          left: 32px;
          right: 32px;
          bottom: 24px;
        }

        @media (max-width: 889px) {
          .border-container-top-bottom-striped {
            display: contents;
            max-width: none;
            margin: 0;
            bottom: 0;
          }

          .border-container-top-bottom-striped-svg {
            display: none;
          }

          .border-container-top-bottom-striped-content {
            position: static;
            display: contents;
          }
        }
      `}</style>
    </div>
  )
}
