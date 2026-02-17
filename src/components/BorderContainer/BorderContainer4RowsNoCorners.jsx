import React from "react"

export const BorderContainer4RowsNoCorners = ({ children, className }) => {
  return (
    <div className={`border-container-4-rows-no-corners ${className}`}>
      {children}
      <style jsx="true">{`
        .border-container-4-rows-no-corners {
          border: 1px solid #302c29;
          position: relative;
        }
      `}</style>
    </div>
  )
}
