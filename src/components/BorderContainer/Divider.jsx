import React from "react"

export const Divider = ({ className }) => {
  return (
    <div className={`divider ${className || ""}`}>
      <svg
        className="divider-svg divider-desktop"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="897"
        height="45"
        viewBox="0 0 897 45"
        fill="none"
      >
        <path
          d="M0.5 0H896.5V45H0.5V0Z"
          fill="url(#pattern0_divider_desktop)"
        />
        <path
          d="M896.5 0H896V45H896.5H897V0H896.5ZM0.5 45H1V0H0.5H0V45H0.5Z"
          fill="#302C29"
        />
        <defs>
          <pattern
            id="pattern0_divider_desktop"
            patternUnits="userSpaceOnUse"
            patternTransform="matrix(9 0 0 9 0.5 0)"
            preserveAspectRatio="none"
            viewBox="1.13411e-07 0 9 9"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#pattern0_divider_desktop_inner"
              transform="translate(-9 -9)"
            />
            <use
              xlinkHref="#pattern0_divider_desktop_inner"
              transform="translate(0 -9)"
            />
            <use
              xlinkHref="#pattern0_divider_desktop_inner"
              transform="translate(-9 0)"
            />
            <g id="pattern0_divider_desktop_inner">
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
      <svg
        className="divider-svg divider-mobile"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="351"
        height="33"
        viewBox="0 0 351 33"
        fill="none"
      >
        <rect
          x="0.5"
          y="0.5"
          width="350"
          height="32"
          fill="url(#pattern0_1202_12929)"
        />
        <defs>
          <pattern
            id="pattern0_1202_12929"
            patternUnits="userSpaceOnUse"
            patternTransform="matrix(9 0 0 9 0.5 0.5)"
            preserveAspectRatio="none"
            viewBox="1.13411e-07 0 9 9"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#pattern0_1202_12929_inner"
              transform="translate(-9 -9)"
            />
            <use
              xlinkHref="#pattern0_1202_12929_inner"
              transform="translate(0 -9)"
            />
            <use
              xlinkHref="#pattern0_1202_12929_inner"
              transform="translate(-9 0)"
            />
            <g id="pattern0_1202_12929_inner">
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
      <style jsx="true">{`
        .divider {
          position: relative;
          width: 100%;
        }

        .divider-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .divider-svg.divider-mobile {
          display: none;
        }

        @media only screen and (max-width: 578px) {
          .divider-svg.divider-desktop {
            display: none;
          }
          .divider-svg.divider-mobile {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}
