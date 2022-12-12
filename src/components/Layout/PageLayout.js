import React from "react"
import { useGlobalContext } from "../../context"

const PageLayout = ({ children }) => {
  const { darkMode } = useGlobalContext()
  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="flex min-h-screen bg-zinc-100 dark:bg-slate-700">
        {children}
      </div>
    </main>
  )
}

export default PageLayout
