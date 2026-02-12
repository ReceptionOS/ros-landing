import React from "react"

export const BorderContainerBottomRowsSidesNoCorners = ({
  children,
  className,
}) => {
  return (
    <>
      <div
        className={`border-container-bottom-rows-sides-no-corners ${className}`}
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
            d="M33 457L32.9998 330.5L26.9998 299.5L32.9998 299.5L0.999737 190.25L0.999738 0.999999"
            stroke="url(#gradient-left-desktop-bottom)"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="gradient-left-desktop-bottom"
              x1="17"
              y1="457"
              x2="17"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#302C29" />
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
            d="M33 435L33 330L27 299L33 299L1 189.75L1 0.499999"
            stroke="url(#gradient-left-mobile-bottom)"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="gradient-left-mobile-bottom"
              x1="17"
              y1="435"
              x2="17"
              y2="0.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#302C29" />
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
            d="M1 457L1.00024 330.5L7.00024 299.5L1.00024 299.5L33.0002 190.25L33.0002 0.999999"
            stroke="url(#gradient-right-desktop-bottom)"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="gradient-right-desktop-bottom"
              x1="17"
              y1="457"
              x2="17"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#302C29" />
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
            d="M1 435L0.999997 330L7 299L0.999995 299L33 189.75L33 0.499999"
            stroke="url(#gradient-right-mobile-bottom)"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="gradient-right-mobile-bottom"
              x1="17"
              y1="435"
              x2="17"
              y2="0.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#302C29" />
              <stop offset="0.55" stopColor="#302C29" stopOpacity="0.5" />
              <stop offset="0.60" stopColor="#302C29" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {children}
        <style jsx="true">{`
          .border-container-bottom-rows-sides-no-corners {
            /* border-top: 1px solid #302c29; */
            display: flex;
            flex-direction: column;
            position: relative;

            .left {
              position: absolute;
              bottom: -1px;
              left: -34px;
            }
            .right {
              position: absolute;
              bottom: -1px;
              right: -34px;
            }
          }
        `}</style>
      </div>
    </>
  )
}
