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
    viewBox="0 0 518 33.1675"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 0.666904L351 0.66746L382 6.66746V0.66746L491.25 32.6675H517.5"
      stroke="#302C29"
      strokeLinecap="round"
    />
  </svg>
)

export const SideVectorRight = () => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    overflow="visible"
    style={{ display: "block" }}
    viewBox="0 0 518 33.1675"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 0.666904L351 0.66746L382 6.66746V0.66746L491.25 32.6675H517.5"
      stroke="#302C29"
      strokeLinecap="round"
    />
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
