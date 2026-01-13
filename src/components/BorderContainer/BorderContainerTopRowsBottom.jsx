import React from "react"

export const BorderContainerTopRowsBottom = ({ children, className }) => {
    return (
        <>
            <div className={`border-container-top-rows-bottom ${className}`}>
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
                {children}
                <style jsx="true">{`
          .border-container-top-rows-bottom {
            border: 1px solid #302c29;
            border-bottom: none;
            display: flex;
            flex-direction: column;
            position: relative;
          }
          .top-rows-bottom-bottom {
            margin-bottom: -1px;
            margin-left: -1px;
            width: calc(100% + 2px);
          }
          .left-top {
            position: absolute;
            top: -1px;
            left: -1px;
          }
          .right-top {
            position: absolute;
            top: -1px;
            right: -1px;
          }
        `}</style>
            </div>
            <svg
                className="top-rows-bottom-bottom desktop"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 963 111"
                fill="none"
            >
                <path
                    d="M962 0.5V94L933 104H875.5L844.5 110V104L30 104.134L1 94.134V0.5"
                    stroke="#302C29"
                    strokeLinecap="round"
                />
            </svg>
            <svg
                className="top-rows-bottom-bottom mobile"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 360 103"
                fill="none"
            >
                <path
                    d="M359 1L359 86L331 95.9999H273.5L242.5 102V95.9999H30L0.999969 86V1"
                    stroke="#302C29"
                    strokeLinecap="round"
                />
            </svg>
        </>
    )
}
