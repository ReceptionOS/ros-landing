import React from "react"

export const BorderContainerTop = ({ className }) => {
  return (
    <div className={`border-container-top ${className || ""}`}>
      <svg
        className="border-container-top-svg"
        width="351"
        height="65"
        viewBox="0 0 351 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M0.5 31.6064H350.5V63.6064H0.5V31.6064Z"
          fill="url(#pattern0_1405_12589)"
        />
        <path
          d="M0.5 31.6064V31.1064H0V31.6064H0.5ZM350.5 31.6064H351V31.1064H350.5V31.6064ZM350.5 63.6064V64.1064H351V63.6064H350.5ZM0.5 63.6064H0V64.1064H0.5V63.6064ZM0.5 31.6064V32.1064H350.5V31.6064V31.1064H0.5V31.6064ZM350.5 31.6064H350V63.6064H350.5H351V31.6064H350.5ZM350.5 63.6064V63.1064H0.5V63.6064V64.1064H350.5V63.6064ZM0.5 63.6064H1V31.6064H0.5H0V63.6064H0.5Z"
          fill="#302C29"
        />
        <path
          d="M0.5 30.6064L0.499998 16.6064L28.5 6.6065L86 6.60649L117 0.60649L117 6.60648L321.5 6.60634L350.5 16.6063L350.5 30.6063"
          stroke="#302C29"
          strokeLinecap="round"
        />
        <defs>
          <pattern
            id="pattern0_1405_12589"
            patternUnits="userSpaceOnUse"
            patternTransform="matrix(9 0 0 9 0.5 31.6064)"
            preserveAspectRatio="none"
            viewBox="1.13411e-07 0 9 9"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#pattern0_1405_12589_inner"
              transform="translate(-9 -9)"
            />
            <use
              xlinkHref="#pattern0_1405_12589_inner"
              transform="translate(0 -9)"
            />
            <use
              xlinkHref="#pattern0_1405_12589_inner"
              transform="translate(-9 0)"
            />
            <g id="pattern0_1405_12589_inner">
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
        .border-container-top {
          width: 100%;
          max-width: 351px;
        }

        .border-container-top-svg {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </div>
  )
}
