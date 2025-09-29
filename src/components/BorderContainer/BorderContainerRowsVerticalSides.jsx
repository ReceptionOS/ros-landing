import React from "react"

export const BorderContainerRowsVerticalSides = ({ children, className }) => {
  return (
    <>
      <div className={`border-container-rows-vertical-sides ${className}`}>
        <svg
          className="left-top"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <path d="M7 1L1 1L1 7" stroke="#877B72" strokeLinecap="round" />
        </svg>
        <svg
          className="left-bottom"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <path d="M7 7L1 7L1 1" stroke="#877B72" strokeLinecap="round" />
        </svg>
        <svg
          className="right-top"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <path d="M1 1L7 1L7 7" stroke="#877B72" strokeLinecap="round" />
        </svg>
        <svg
          className="right-bottom"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <path d="M1 7L7 7L7 1" stroke="#877B72" strokeLinecap="round" />
        </svg>
        <svg
          className="left-middle"
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="230"
          viewBox="0 0 2 230"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M1 1L1.00001 229"
            stroke="#877B72"
            strokeLinecap="round"
          />
          <path
            d="M0.999756 95L0.999757 115"
            stroke="#877B72"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="right-middle"
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="230"
          viewBox="0 0 2 230"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M1 1L1.00001 229"
            stroke="#877B72"
            strokeLinecap="round"
          />
          <path
            d="M0.999756 95L0.999757 115"
            stroke="#877B72"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="top-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 303 8"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M1 1H58.5L89.5 7V1H302"
            stroke="#877B72"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="top-2"
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="2"
          viewBox="0 0 54 2"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M53 0.999995L1 1"
            stroke="#877B72"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="top-3"
          xmlns="http://www.w3.org/2000/svg"
          width="186"
          height="2"
          viewBox="0 0 186 2"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M203 1.00002L1 1"
            stroke="#877B72"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 303 8"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M302 1H229L198 7V1H1"
            stroke="#877B72"
            strokeLinecap="round"
          />
        </svg>
        {children}
        <style jsx="true">{`
          .border-container-rows-vertical-sides {
            display: flex;
            flex-direction: column;
            position: relative;
            border: 1px solid #302c29;
            border-top: none;
            border-bottom: none;

            .top-1 {
              position: absolute;
              top: -1px;
            }
            .top-2 {
              position: absolute;
              top: 2px;
              left: 6px;
            }

            .top-3 {
              position: absolute;
              top: 2px;
              right: 8px;
            }

            .bottom {
              position: absolute;
              bottom: -8px;
            }

            .left-top {
              position: absolute;
              top: -1px;
              left: -1px;
              z-index: 3;
            }
            .left-bottom {
              position: absolute;
              bottom: -1px;
              left: -1px;
              z-index: 3;
            }
            .right-top {
              position: absolute;
              top: -1px;
              right: -1px;
              z-index: 3;
            }
            .right-bottom {
              position: absolute;
              bottom: -1px;
              right: -1px;
              z-index: 3;
            }
            .left-middle {
              position: absolute;
              left: -1px;
              z-index: 3;
            }
            .right-middle {
              position: absolute;
              right: -1px;
              z-index: 3;
            }

            @media only screen and (max-width: 452px) {
              .top-1 {
                top: 0px;
              }

              .top-2 {
                top: 3px;
              }

              .top-3 {
                position: absolute;
                top: 3px;
              }
              .right-top {
                top: 0px;
              }
              .left-top {
                top: 0px;
              }
            }
          }
        `}</style>
      </div>
    </>
  )
}
