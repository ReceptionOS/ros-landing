import React from "react"

export const BorderContainer4Rows = ({ children, className }) => {
  return (
    <div className={`border-container-4-rows ${className}`}>
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
      {children}
      <style jsx="true">{`
        .border-container-4-rows {
          border: 1px solid #302c29;
          position: relative;

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
        }
      `}</style>
    </div>
  )
}
