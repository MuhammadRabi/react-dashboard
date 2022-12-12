import React from "react"
import { FiMoon, FiSun } from "react-icons/fi"
import { useGlobalContext } from "../../context"

const DarkModeButton = () => {
  const { darkMode, setDarkMode } = useGlobalContext()
  return (
    <>
      {darkMode ? (
        <FiMoon className="cursor-pointer" onClick={() => setDarkMode(false)} />
      ) : (
        <FiSun className="cursor-pointer" onClick={() => setDarkMode(true)} />
      )}
    </>
  )
}

export default DarkModeButton
