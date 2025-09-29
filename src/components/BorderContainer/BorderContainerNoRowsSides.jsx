import React from "react"

export const BorderContainerNoRowsSides = ({ children, className }) => {
    return (
        <>
            <div className={`border-container-no-rows-sides ${className}`}>
                <svg
                    className="left desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="248"
                    viewBox="0 0 31 248"
                    fill="none"
                >
                    <path
                        d="M30 1L29.9998 56L23.9998 87L29.9998 87L0.999999 196.25L0.999999 247"
                        stroke="#302C29"
                        strokeLinecap="round"
                    />
                </svg>
                <svg
                    className="right desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="248"
                    viewBox="0 0 31 248"
                    fill="none"
                >
                    <path
                        d="M1 1L1.00024 56L7.00024 87L1.00024 87L30 196.25L30 247"
                        stroke="#302C29"
                        strokeLinecap="round"
                    />
                </svg>
                {children}
                <style jsx="true">{`
          .border-container-no-rows-sides {
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
