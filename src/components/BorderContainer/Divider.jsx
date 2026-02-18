import React from "react"

export const Divider = ({ className }) => {
  return (
    <div className={`divider ${className || ""}`}>
      <svg
        className="divider-svg"
        width="897"
        height="45"
        viewBox="0 0 897 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M0.5 0H896.5V45H0.5V0Z" fill="url(#pattern0_1181_7943)" />
        <path
          d="M896.5 0H896V45H896.5H897V0H896.5ZM0.5 45H1V0H0.5H0V45H0.5Z"
          fill="#302C29"
        />
        <defs>
          <pattern
            id="pattern0_1181_7943"
            patternUnits="userSpaceOnUse"
            patternTransform="matrix(9 0 0 9 0.5 0)"
            preserveAspectRatio="none"
            viewBox="1.13411e-07 0 9 9"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#pattern0_1181_7943_inner"
              transform="translate(-9 -9)"
            />
            <use
              xlinkHref="#pattern0_1181_7943_inner"
              transform="translate(0 -9)"
            />
            <use
              xlinkHref="#pattern0_1181_7943_inner"
              transform="translate(-9 0)"
            />
            <g id="pattern0_1181_7943_inner">
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
      `}</style>
    </div>
  )
}
