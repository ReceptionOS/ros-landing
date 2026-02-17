import React from "react"

export const BorderContainerFeatures = ({ children, className }) => {
  return (
    <div className={`border-container-features ${className}`}>
      <svg
        className="features-border-svg"
        width="961"
        height="342"
        viewBox="0 0 961 342"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M0.5 30.6064H960.5V62.6064H0.5V30.6064Z"
          fill="url(#pattern0_1405_12426)"
        />
        <path
          d="M0.5 30.6064V30.1064H0V30.6064H0.5ZM960.5 30.6064H961V30.1064H960.5V30.6064ZM0.5 30.6064V31.1064H960.5V30.6064V30.1064H0.5V30.6064ZM960.5 30.6064H960V62.6064H960.5H961V30.6064H960.5ZM0.5 62.6064H1V30.6064H0.5H0V62.6064H0.5Z"
          fill="#302C29"
        />
        <path
          d="M0.5 308.606H960.5V340.606H0.5V308.606Z"
          fill="url(#pattern1_1405_12426)"
        />
        <path
          d="M960.5 340.606V341.106H961V340.606H960.5ZM0.5 340.606H0V341.106H0.5V340.606ZM960.5 308.606H960V340.606H960.5H961V308.606H960.5ZM960.5 340.606V340.106H0.5V340.606V341.106H960.5V340.606ZM0.5 340.606H1V308.606H0.5H0V340.606H0.5Z"
          fill="#302C29"
        />
        <rect x="0.5" y="62.6064" width="960" height="246" stroke="#302C29" />
        <path
          d="M36.5 308.106L36.5 250.666L42.5 219.699L36.5 219.699L36.5 63.1064"
          stroke="#302C29"
          strokeLinecap="round"
        />
        <path
          d="M924.5 308.106L924.5 250.666L918.5 219.699L924.5 219.699L924.5 63.1064"
          stroke="#302C29"
          strokeLinecap="round"
        />
        <path
          d="M0.5 30.6064V16.6064L28.5 6.6065H86L117 0.60651V6.6065L931.5 6.6065L960.5 16.6064V30.6064"
          stroke="#302C29"
          strokeLinecap="round"
        />
        <g opacity="0.5">
          <path
            d="M36.5 68.6064V62.6064H42.5"
            stroke="#877B72"
            strokeLinecap="round"
          />
        </g>
        <g opacity="0.5">
          <path
            d="M924.5 68.6064V62.6064H918.5"
            stroke="#877B72"
            strokeLinecap="round"
          />
        </g>
        <g opacity="0.5">
          <path
            d="M42.5 308.606L36.5 308.606L36.5 302.606"
            stroke="#877B72"
            strokeLinecap="round"
          />
        </g>
        <g opacity="0.5">
          <path
            d="M918.5 308.606L924.5 308.606L924.5 302.606"
            stroke="#877B72"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <pattern
            id="pattern0_1405_12426"
            patternUnits="userSpaceOnUse"
            patternTransform="matrix(9 0 0 9 0.5 30.6064)"
            preserveAspectRatio="none"
            viewBox="1.13411e-07 0 9 9"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#pattern0_1405_12426_inner"
              transform="translate(-9 -9)"
            />
            <use
              xlinkHref="#pattern0_1405_12426_inner"
              transform="translate(0 -9)"
            />
            <use
              xlinkHref="#pattern0_1405_12426_inner"
              transform="translate(-9 0)"
            />
            <g id="pattern0_1405_12426_inner">
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
            id="pattern1_1405_12426"
            patternUnits="userSpaceOnUse"
            patternTransform="matrix(9 0 0 9 0.5 308.606)"
            preserveAspectRatio="none"
            viewBox="1.13411e-07 0 9 9"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#pattern1_1405_12426_inner"
              transform="translate(-9 -9)"
            />
            <use
              xlinkHref="#pattern1_1405_12426_inner"
              transform="translate(0 -9)"
            />
            <use
              xlinkHref="#pattern1_1405_12426_inner"
              transform="translate(-9 0)"
            />
            <g id="pattern1_1405_12426_inner">
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
      <div className="features-content">{children}</div>
      <style jsx="true">{`
        .border-container-features {
          position: relative;
          width: 100%;
          max-width: 961px;
        }

        .features-border-svg {
          width: 100%;
          height: auto;
        }

        .features-content {
          position: absolute;
          top: 62px;
          left: 36px;
          right: 36px;
          bottom: 34px;
        }
      `}</style>
    </div>
  )
}
