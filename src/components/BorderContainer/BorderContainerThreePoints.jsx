import React from "react"

export const BorderContainerThreePoints = ({ children, className }) => {
  return (
    <div className={`border-container-three-points ${className}`}>
      <svg
        className="three-points-svg"
        width="961"
        height="564"
        viewBox="0 0 961 564"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M928.5 484.5L928.5 378L934.5 347L928.5 347L960.5 237.75L960.5 48.5"
          stroke="#302C29"
          strokeLinecap="round"
        />
        <path
          d="M0.5 0.5H960.5V48.5H0.5V0.5Z"
          fill="url(#pattern0_three_points)"
        />
        <path
          d="M0.5 0.5V0H0V0.5H0.5ZM960.5 0.5H961V0H960.5V0.5ZM960.5 48.5V49H961V48.5H960.5ZM0.5 48.5H0V49H0.5V48.5ZM0.5 0.5V1H960.5V0.5V0H0.5V0.5ZM960.5 0.5H960V48.5H960.5H961V0.5H960.5ZM960.5 48.5V48H0.5V48.5V49H960.5V48.5ZM0.5 48.5H1V0.5H0.5H0V48.5H0.5Z"
          fill="#302C29"
        />
        <path
          d="M32.5 484.5H928.5V532.5H32.5V484.5Z"
          fill="url(#pattern1_three_points)"
        />
        <path
          d="M32.5 484.5V484H32V484.5H32.5ZM928.5 484.5H929V484H928.5V484.5ZM928.5 532.5V533H929V532.5H928.5ZM32.5 532.5H32V533H32.5V532.5ZM32.5 484.5V485H928.5V484.5V484H32.5V484.5ZM928.5 484.5H928V532.5H928.5H929V484.5H928.5ZM928.5 532.5V532H32.5V532.5V533H928.5V532.5ZM32.5 532.5H33V484.5H32.5H32V532.5H32.5Z"
          fill="#302C29"
        />
        <path
          d="M32.5005 484.5L32.5002 378L26.5002 347L32.5002 347L0.500217 237.75L0.500217 48.5"
          stroke="#302C29"
          strokeLinecap="round"
        />
        <path
          d="M928.5 532.5L928.5 546.5L900 556.5L842.5 556.5L811.5 562.5L811.5 556.5L61.5 556.5L32.5 546.5L32.5 532.5"
          stroke="#302C29"
          strokeLinecap="round"
        />
        <path
          d="M32.5 478.5L32.5 484.5L38.5 484.5"
          stroke="#877B72"
          strokeLinecap="round"
        />
        <path
          d="M922.5 484.5L928.5 484.5L928.5 478.5"
          stroke="#877B72"
          strokeLinecap="round"
        />
        <path
          d="M8.7373 59H66.2373L97.2373 65V59H950.059"
          stroke="#302C29"
          strokeLinecap="round"
        />
        <defs>
          <pattern
            id="pattern0_three_points"
            patternUnits="userSpaceOnUse"
            patternTransform="matrix(9 0 0 9 0.5 0.5)"
            preserveAspectRatio="none"
            viewBox="1.13411e-07 0 9 9"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#pattern0_three_points_inner"
              transform="translate(-9 -9)"
            />
            <use
              xlinkHref="#pattern0_three_points_inner"
              transform="translate(0 -9)"
            />
            <use
              xlinkHref="#pattern0_three_points_inner"
              transform="translate(-9 0)"
            />
            <g id="pattern0_three_points_inner">
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
          <pattern
            id="pattern1_three_points"
            patternUnits="userSpaceOnUse"
            patternTransform="matrix(9 0 0 9 32.5 484.5)"
            preserveAspectRatio="none"
            viewBox="1.13411e-07 0 9 9"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#pattern1_three_points_inner"
              transform="translate(-9 -9)"
            />
            <use
              xlinkHref="#pattern1_three_points_inner"
              transform="translate(0 -9)"
            />
            <use
              xlinkHref="#pattern1_three_points_inner"
              transform="translate(-9 0)"
            />
            <g id="pattern1_three_points_inner">
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
      <div className="three-points-content">{children}</div>
      <style jsx="true">{`
        .border-container-three-points {
          position: relative;
          width: 100%;
          max-width: 960px;
        }

        .three-points-svg {
          width: 100%;
          height: auto;
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        .three-points-content {
          position: relative;
          z-index: 1;
          padding-top: 59px;
          padding-left: 32px;
          padding-right: 32px;
          padding-bottom: 40px;
        }
      `}</style>
    </div>
  )
}
