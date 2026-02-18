import React from "react"

export const BorderContainer4RowsRight = ({ children, className }) => {
  return (
    <div className={`border-container-4-rows-right ${className}`}>
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
        .border-container-4-rows-right {
          position: relative;

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
