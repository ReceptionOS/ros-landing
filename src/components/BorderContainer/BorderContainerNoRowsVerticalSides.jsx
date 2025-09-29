import React from "react"

export const BorderContainerNoRowsVerticalSides = ({ children, className }) => {
    return (
        <>
            <div className={`border-container-no-rows-vertical-sides ${className}`}>
                <svg
                    className="top desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 343 8"
                    fill="none"
                >
                    <path
                        opacity="0.3"
                        d="M1 1.00244H58.5L89.5 7.00244V1.00244H341.985"
                        stroke="#877B72"
                        strokeLinecap="round"
                    />
                </svg>
                <svg
                    className="bottom desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 343 8"
                    fill="none"
                >
                    <path
                        opacity="0.3"
                        d="M1 0.536865H58.5L89.5 6.53687V0.536865H341.985"
                        stroke="#877B72"
                        strokeLinecap="round"
                    />
                </svg>
                <svg
                    className="left-side"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="69"
                    viewBox="0 0 2 69"
                    fill="none"
                >
                    <path
                        d="M0.999756 1L0.999757 68"
                        stroke="#877B72"
                        strokeLinecap="round"
                    />
                </svg>
                <svg
                    className="right-side"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="69"
                    viewBox="0 0 2 69"
                    fill="none"
                >
                    <path
                        d="M1.00049 1L1.00049 68"
                        stroke="#877B72"
                        strokeLinecap="round"
                    />
                </svg>
                {children}
                <style jsx="true">{`
          .border-container-no-rows-vertical-sides {
            display: flex;
            flex-direction: column;
            position: relative;
            border: 1px solid #302c29;
            border-top: none;
            border-bottom: none;

            .top {
              position: absolute;
              top: -1px;
            }
            .bottom {
              position: absolute;
              bottom: -10px;
            }

            .left-side {
              position: absolute;
              left: -1px;
              top: 120px;
              z-index: 3;
            }
            .right-side {
              position: absolute;
              right: -2px;
              top: 120px;
              z-index: 3;
            }
          }
        `}</style>
            </div>
        </>
    )
}
