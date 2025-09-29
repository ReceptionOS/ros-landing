import React from "react"

export const BorderContainerNoRowsTop = ({ children, className }) => {
    return (
        <>
            <svg
                className="no-rows-top-top desktop"
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
                className="no-rows-top-top mobile"
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
            <div className={`border-container-no-rows-top ${className}`}>
                {children}
                <style jsx="true">{`
          .border-container-no-rows-top {
            border: 1px solid #302c29;
            border-top: none;
            display: flex;
            flex-direction: column;
          }
          .no-rows-top-top {
            margin-bottom: -1px;
            margin-left: -1px;
            width: calc(100% + 2px);
          }
        `}</style>
            </div>
        </>
    )
}
