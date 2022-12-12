import { createContext, useContext, useState } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }

export const useGlobalContext = () => {
  return useContext(AppContext)
}
