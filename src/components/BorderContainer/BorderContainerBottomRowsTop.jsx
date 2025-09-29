import React from "react"

export const BorderContainerBottomRowsTop = ({ children, className }) => {
    return (
        <>
            <svg
                className="bottom-rows-top-top desktop"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 962 32"
                fill="none"
            >
                <path
                    d="M1 31V17L29 7.00006H86.5L117.5 1.00006V7.00006L932 7.00006L961 17V31"
                    stroke="#302C29"
                    strokeLinecap="round"
                />
            </svg>
            <svg
                className="bottom-rows-top-top mobile"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 376 32"
                fill="none"
            >
                <path
                    d="M1 31V17L29 7.00006H89.5L120.5 1.00006V7.00006H346L375 17V31"
                    stroke="#302C29"
                    strokeLinecap="round"
                />
            </svg>
            <div className={`border-container-bottom-rows-top ${className}`}>
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
                    className="right-bottom"
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
          .border-container-bottom-rows-top {
            border: 1px solid #302c29;
            border-top: none;
            display: flex;
            flex-direction: column;
            position: relative;
          }
          .bottom-rows-top-top {
            margin-bottom: -2px;
            margin-left: 1px;
            width: calc(100% + 2px);
          }
          .left-bottom {
            position: absolute;
            bottom: -1px;
            left: -1px;
            z-index: 2;
          }
          .right-bottom {
            position: absolute;
            bottom: -1px;
            right: -1px;
            z-index: 2;
          }
        `}</style>
            </div>
        </>
    )
}
