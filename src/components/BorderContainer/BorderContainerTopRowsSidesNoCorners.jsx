import React from "react"

export const BorderContainerTopRowsSidesNoCorners = ({
  children,
  className,
}) => {
  return (
    <>
      <div
        className={`border-container-top-rows-sides-no-corners ${className}`}
      >
        <svg
          className="left desktop"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="458"
          viewBox="0 0 34 458"
          fill="none"
        >
          <path
            d="M33 1L32.9998 127.5L26.9998 158.5L32.9998 158.5L0.999737 267.75L0.999738 457"
            stroke="url(#gradient-left-desktop-top)"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="gradient-left-desktop-top"
              x1="17"
              y1="1"
              x2="17"
              y2="457"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#302C29" stopOpacity="0" />
              <stop offset="0.3" stopColor="#302C29" stopOpacity="1" />
              <stop offset="0.5" stopColor="#302C29" stopOpacity="1" />
              <stop offset="0.55" stopColor="#302C29" stopOpacity="0.5" />
              <stop offset="0.60" stopColor="#302C29" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="left mobile"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="436"
          viewBox="0 0 34 436"
          fill="none"
        >
          <path
            d="M33 1L33 106L27 137L33 137L1 246.25L1 435.5"
            stroke="url(#gradient-left-mobile-top)"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="gradient-left-mobile-top"
              x1="17"
              y1="1"
              x2="17"
              y2="435.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#302C29" stopOpacity="0" />
              <stop offset="0.3" stopColor="#302C29" stopOpacity="1" />
              <stop offset="0.5" stopColor="#302C29" stopOpacity="1" />
              <stop offset="0.55" stopColor="#302C29" stopOpacity="0.5" />
              <stop offset="0.60" stopColor="#302C29" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="right desktop"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="458"
          viewBox="0 0 34 458"
          fill="none"
        >
          <path
            d="M1 1L1.00024 127.5L7.00024 158.5L1.00024 158.5L33.0002 267.75L33.0002 457"
            stroke="url(#gradient-right-desktop-top)"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="gradient-right-desktop-top"
              x1="17"
              y1="1"
              x2="17"
              y2="457"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#302C29" stopOpacity="0" />
              <stop offset="0.3" stopColor="#302C29" stopOpacity="1" />
              <stop offset="0.5" stopColor="#302C29" stopOpacity="1" />
              <stop offset="0.55" stopColor="#302C29" stopOpacity="0.5" />
              <stop offset="0.60" stopColor="#302C29" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="right mobile"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="436"
          viewBox="0 0 34 436"
          fill="none"
        >
          <path
            d="M1 1L1 106L7 137L1 137L33 246.25L33 435.5"
            stroke="url(#gradient-right-mobile-top)"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="gradient-right-mobile-top"
              x1="17"
              y1="1"
              x2="17"
              y2="435.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#302C29" stopOpacity="0" />
              <stop offset="0.3" stopColor="#302C29" stopOpacity="1" />
              <stop offset="0.5" stopColor="#302C29" stopOpacity="1" />
              <stop offset="0.55" stopColor="#302C29" stopOpacity="0.5" />
              <stop offset="0.60" stopColor="#302C29" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {children}
        <style jsx="true">{`
          .border-container-top-rows-sides-no-corners {
            /* border-bottom: 1px solid #302c29; */
            display: flex;
            flex-direction: column;
            position: relative;

            .left {
              position: absolute;
              top: -1px;
              left: -34px;
            }
            .right {
              position: absolute;
              top: -1px;
              right: -34px;
            }
          }
        `}</style>
      </div>
    </>
  )
}
