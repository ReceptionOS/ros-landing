import React from "react"

export const BorderContainerTopRowsSides = ({ children, className }) => {
    return (
        <>
            <div className={`border-container-top-rows-sides ${className}`}>
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
                    className="left desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="833"
                    viewBox="0 0 34 833"
                    fill="none"
                >
                    <path
                        d="M33 0.5L33 105.5L27 136.5L33 136.5L1 245.75L1 832.5"
                        stroke="url(#paint0_linear_206_3252)"
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_206_3252"
                            x1="17"
                            y1="358"
                            x2="17"
                            y2="833"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#302C29" />
                            <stop offset="1" stopColor="#302C29" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    className="left mobile"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="431"
                    viewBox="0 0 34 431"
                    fill="none"
                >
                    <path
                        d="M33 -4L33 101L27 132L33 132L1 241.25L1 430.5"
                        stroke="#302C29"
                        strokeLinecap="round"
                    />
                </svg>
                <svg
                    className="right desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="792"
                    viewBox="0 0 34 792"
                    fill="none"
                >
                    <path
                        d="M1 0.5L0.999997 105.5L7 136.5L0.999995 136.5L33 245.75L33 791"
                        stroke="url(#paint0_linear_206_3251)"
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_206_3251"
                            x1="17"
                            y1="440.5"
                            x2="16.9994"
                            y2="820"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#302C29" />
                            <stop offset="1" stopColor="#302C29" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    className="right mobile"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="431"
                    viewBox="0 0 34 431"
                    fill="none"
                >
                    <path
                        d="M1 -4L0.999997 101L7 132L0.999995 132L33 241.25L33 430.5"
                        stroke="#302C29"
                        strokeLinecap="round"
                    />
                </svg>
                {children}
                <style jsx="true">{`
          .border-container-top-rows-sides {
            border-top: 1px solid #302c29;
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
              left: -1px;
              z-index: 2;
            }
            .right-top {
              position: absolute;
              top: -1px;
              right: -1px;
              z-index: 2;
            }
          }
        `}</style>
            </div>
        </>
    )
}
