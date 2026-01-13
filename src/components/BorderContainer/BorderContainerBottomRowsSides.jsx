import React from "react"

export const BorderContainerBottomRowsSides = ({ children, className }) => {
    return (
        <>
            <div className={`border-container-bottom-rows-sides ${className}`}>
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
                    className="left desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="458"
                    viewBox="0 0 34 458"
                    fill="none"
                >
                    <path
                        d="M33 457L32.9998 330.5L26.9998 299.5L32.9998 299.5L0.999737 190.25L0.999738 0.999999"
                        stroke="#302C29"
                        strokeLinecap="round"
                    />
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
                        stroke="#302C29"
                        strokeLinecap="round"
                    />
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
                        stroke="#302C29"
                        strokeLinecap="round"
                    />
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
                        stroke="#302C29"
                        strokeLinecap="round"
                    />
                </svg>
                {children}
                <style jsx="true">{`
          .border-container-bottom-rows-sides {
            /* border-top: 1px solid #302c29; */
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

            .left-top {
              position: absolute;
              top: -1px;
              left: -34px;
              z-index: 2;
            }
            .left-bottom {
              position: absolute;
              bottom: -1px;
              left: -1px;
              z-index: 2;
            }
            .right-top {
              position: absolute;
              top: -1px;
              right: -34px;
              z-index: 2;
            }
            .right-bottom {
              position: absolute;
              bottom: -1px;
              right: -1px;
              z-index: 2;
            }
          }
        `}</style>
            </div>
        </>
    )
}
