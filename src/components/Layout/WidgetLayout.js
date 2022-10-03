import React from "react"

const WidgetLayout = ({ children }) => {
  return (
    <>
      <div className="bg-white rounded-md px-3 md:px-6 py-4 shadow-md">
        {children}
      </div>
    </>
  )
}

export default WidgetLayout
