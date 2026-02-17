import React from "react"

export const BorderContainerSidesTopBottomSmallerMobile = ({
  children,
  className
}) => {
  return (
    <div
      className={`border-container-sides-top-bottom-smaller-mobile ${
        className || ""
      }`}
    >
      <svg
        className="sides-top-bottom-smaller-mobile-svg"
        width="351"
        height="365"
        viewBox="0 0 351 365"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M0.5 0.5H350.5V31.5H0.5V0.5Z"
          fill="url(#pattern0_1405_12580)"
        />
        <path
          d="M0.5 0.5V0H0V0.5H0.5ZM350.5 0.5H351V0H350.5V0.5ZM350.5 31.5V32H351V31.5H350.5ZM0.5 31.5H0V32H0.5V31.5ZM0.5 0.5V1H350.5V0.5V0H0.5V0.5ZM350.5 0.5H350V31.5H350.5H351V0.5H350.5ZM350.5 31.5V31H0.5V31.5V32H350.5V31.5ZM0.5 31.5H1V0.5H0.5H0V31.5H0.5Z"
          fill="#302C29"
        />
        <path
          d="M350 31.5V71.5L338.5 83V364.5"
          stroke="url(#paint0_linear_1405_12580)"
          strokeLinecap="round"
        />
        <path
          d="M1 31.5V71.5L12.5 83V364.5"
          stroke="url(#paint1_linear_1405_12580)"
          strokeLinecap="round"
        />
        <g opacity="0.5">
          <path
            d="M350.5 37.5V31.5H344.5"
            stroke="#877B72"
            strokeLinecap="round"
          />
        </g>
        <g opacity="0.5">
          <path
            d="M0.5 37.5L0.5 31.5H6.5"
            stroke="#877B72"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1405_12580"
            x1="324.25"
            y1="31.5"
            x2="324.25"
            y2="404"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#302C29" />
            <stop offset="1" stopColor="#302C29" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1405_12580"
            x1="26.75"
            y1="31.5"
            x2="26.75"
            y2="404"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#302C29" />
            <stop offset="1" stopColor="#302C29" stopOpacity="0" />
          </linearGradient>
          <pattern
            id="pattern0_1405_12580"
            patternUnits="userSpaceOnUse"
            patternTransform="matrix(9 0 0 9 0.5 0.5)"
            preserveAspectRatio="none"
            viewBox="1.13411e-07 0 9 9"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#pattern0_1405_12580_inner"
              transform="translate(-9 -9)"
            />
            <use
              xlinkHref="#pattern0_1405_12580_inner"
              transform="translate(0 -9)"
            />
            <use
              xlinkHref="#pattern0_1405_12580_inner"
              transform="translate(-9 0)"
            />
            <g id="pattern0_1405_12580_inner">
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
      <div className="sides-top-bottom-smaller-mobile-content">{children}</div>
      <div className="sides-top-bottom-smaller-mobile-fader" />
      <style jsx="true">{`
        .border-container-sides-top-bottom-smaller-mobile {
          position: relative;
          width: 100%;
          max-width: 351px;
        }

        .sides-top-bottom-smaller-mobile-svg {
          width: 100%;
          height: auto;
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        .sides-top-bottom-smaller-mobile-content {
          position: relative;
          z-index: 1;
          padding-top: 31.5px;
        }

        .sides-top-bottom-smaller-mobile-fader {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 64px;
          background: linear-gradient(to bottom, transparent, #0a0a0a);
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}
