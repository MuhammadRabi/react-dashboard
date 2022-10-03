import React from "react"

import { FaRegBell } from "react-icons/fa"
import avatar from "./../../imgs/avatar.png"
const Header = () => {
  return (
    <>
      <header className="bg-white p-3 mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="type a keyword"
          className="px-2 py-1 ml-4 outline-none capitalize block border rounded-md"
        />
        <div className="avatar flex items-center space-x-2">
          <div className="notification-icon">
            <FaRegBell className=" text-xl" />
          </div>
          <img src={avatar} className="w-8 h-8" alt="avatar" />
        </div>
      </header>
    </>
  )
}

export default Header
