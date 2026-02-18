import React from "react"

export const Vector115 = () => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    overflow="visible"
    style={{ display: "block", transform: "scaleY(-1)" }}
    viewBox="0 0 639 31.106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 0.5V14.5L28.5 24.4999H86L117 30.4999V24.4999L609.5 24.5L638.5 14.5001V0.500056"
      stroke="#302C29"
      strokeLinecap="round"
    />
  </svg>
)

export const Vector4 = () => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    overflow="visible"
    style={{ display: "block", transform: "rotate(180deg) scaleY(-1)" }}
    viewBox="0 0 639 109.106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M69.8314 102.528H0.5V0.5H638.5V102.528H100.751V108.5L69.8314 102.528Z"
      fill="#221815"
      fillOpacity="0.23"
      stroke="#302C29"
      strokeLinecap="round"
    />
  </svg>
)

export const SideVectorLeft = () => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    overflow="visible"
    style={{ display: "block" }}
    viewBox="0 0 33.1675 518"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="scale(1,-1) rotate(-90)">
      <path
        d="M0.5 0.666904L351 0.66746L382 6.66746V0.66746L491.25 32.6675H517.5"
        stroke="#302C29"
        strokeLinecap="round"
      />
    </g>
  </svg>
)

export const SideVectorRight = () => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    overflow="visible"
    style={{ display: "block" }}
    viewBox="0 0 33.1675 518"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(0,518) rotate(-90)">
      <path
        d="M0.5 0.666904L351 0.66746L382 6.66746V0.66746L491.25 32.6675H517.5"
        stroke="#302C29"
        strokeLinecap="round"
      />
    </g>
  </svg>
)

export const BottomShapes = () => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    overflow="visible"
    style={{ display: "block" }}
    viewBox="0 0 639 413.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.5 0.5L32.5 83.5001L26.5 114.5L32.5 114.5L0.500012 223.75L0.5 413"
      stroke="url(#bottom-grad-left)"
      strokeLinecap="round"
    />
    <path
      d="M606.5 0.5L606.5 83.5001L612.5 114.5L606.5 114.5L638.5 223.75L638.5 413"
      stroke="url(#bottom-grad-right)"
      strokeLinecap="round"
    />
    <path
      d="M604.5 0.5H547.06L516.092 6.5V0.5H32.5001"
      stroke="#302C29"
      strokeLinecap="round"
    />
    <rect x="32.5" y="0.5" width="574" height="24" fill="url(#bottom-hatch)" />
    <rect x="32.5" y="24" width="574" height="1" fill="#302C29" />
    <defs>
      <linearGradient
        id="bottom-grad-left"
        x1="16.5"
        y1="0.5"
        x2="16.5"
        y2="413"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#302C29" />
        <stop offset="1" stopColor="#302C29" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="bottom-grad-right"
        x1="622.5"
        y1="0.5"
        x2="622.5"
        y2="413"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#302C29" />
        <stop offset="1" stopColor="#302C29" stopOpacity="0" />
      </linearGradient>
      <pattern
        id="bottom-hatch"
        patternUnits="userSpaceOnUse"
        width="9"
        height="9"
        patternTransform="translate(32.5 0.5)"
      >
        <line
          x1="9.354"
          y1="0.354"
          x2="0.354"
          y2="9.354"
          stroke="#302C29"
          opacity="0.5"
        />
      </pattern>
    </defs>
  </svg>
)

export const CornerArrow = ({ position }) => {
  const paths = {
    "left-top": "M7 1L1 1L1 7",
    "left-bottom": "M7 7L1 7L1 1",
    "right-top": "M1 1L7 1L7 7",
    "right-bottom": "M1 7L7 7L7 1"
  }

  return (
    <svg
      className={`corner-arrow corner-${position}`}
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
    >
      <path d={paths[position]} stroke="#877B72" strokeLinecap="round" />
    </svg>
  )
}
