import React from "react"

export const BorderContainerNoRowsVerticalSidesLong = ({
    children,
    className,
}) => {
    return (
        <>
            <div
                className={`border-container-no-rows-vertical-sides-long ${className}`}
            >
                <svg
                    className="long-top desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 962 8"
                    fill="none"
                >
                    <path
                        opacity="0.3"
                        d="M1 1H58.5L89.5 7V1H961"
                        stroke="#877B72"
                        strokeLinecap="round"
                    />
                </svg>
                <svg
                    className="long-bottom desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 962 8"
                    fill="none"
                >
                    <path
                        opacity="0.3"
                        d="M961 1H229L198 7V1H1"
                        stroke="#877B72"
                        strokeLinecap="round"
                    />
                </svg>
                <svg
                    className="long-left-top"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                >
                    <path d="M7 1L1 1L1 7" stroke="#877B72" strokeLinecap="round" />
                </svg>
                <svg
                    className="long-left-bottom"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                >
                    <path d="M7 7L1 7L1 1" stroke="#877B72" strokeLinecap="round" />
                </svg>
                <svg
                    className="long-right-top"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                >
                    <path d="M1 1L7 1L7 7" stroke="#877B72" strokeLinecap="round" />
                </svg>
                <svg
                    className="long-right-bottom"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                >
                    <path d="M1 7L7 7L7 1" stroke="#877B72" strokeLinecap="round" />
                </svg>
                {children}
                <style jsx="true">{`
          .border-container-no-rows-vertical-sides-long {
            display: flex;
            flex-direction: column;
            position: relative;
            border: 1px solid #302c29;
            border-top: none;
            border-bottom: none;
            overflow: visible;

            .long-top {
              position: absolute;
              top: 0px;
              z-index: 10;
            }
            .long-bottom {
              position: absolute;
              bottom: -8px;
              z-index: 10;
            }

            .long-left-top {
              position: absolute;
              top: 0px;
              left: -1px;
              z-index: 3;
            }
            .long-left-bottom {
              position: absolute;
              bottom: 0px;
              left: -1px;
              z-index: 3;
            }
            .long-right-top {
              position: absolute;
              top: 0px;
              right: -1px;
              z-index: 3;
            }
            .long-right-bottom {
              position: absolute;
              bottom: 0px;
              right: -1px;
              z-index: 3;
            }
          }
        `}</style>
            </div>
        </>
    )
}
