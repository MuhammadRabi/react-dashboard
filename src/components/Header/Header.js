import { FaRegBell, FaRegCommentAlt, FaMoon } from "react-icons/fa"
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
        <div className="avatar flex items-center space-x-12">
          <div className="notification-icon flex items-center space-x-6 text-zinc-600 text-2xl">
            <div className="item">
              <FaRegBell />
              <div className="counter flex items-center justify-center font-bold text-xs p-2.5 text-white rounded-full">
                2
              </div>
            </div>
            <div className="item">
              <FaRegCommentAlt />
              <div className="counter flex items-center justify-center font-bold text-xs p-2.5 text-white rounded-full">
                1
              </div>
            </div>
            <FaMoon />
          </div>
          <img src={avatar} className="w-8 h-8" alt="avatar" />
        </div>
      </header>
    </>
  )
}

export default Header
