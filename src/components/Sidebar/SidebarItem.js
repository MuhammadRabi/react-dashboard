import {
  FaDiceSix,
  FaWrench,
  FaUserTie,
  FaProjectDiagram,
  FaBook,
  FaUserFriends,
  FaRegFileAlt,
  FaChromecast,
} from "react-icons/fa"
import { NavLink } from "react-router-dom"

const SidebarItem = ({ type }) => {
  let data
  if (type === "dashboard") {
    data = {
      icon: (
        <FaDiceSix size="24" className="text-zinc-500 hover:text-blue-500" />
      ),
    }
  } else if (type === "settings") {
    data = {
      icon: (
        <FaWrench size="24" className="text-zinc-500 hover:text-blue-500" />
      ),
    }
  } else if (type === "profile") {
    data = {
      icon: (
        <FaUserTie size="24" className="text-zinc-500 hover:text-blue-500" />
      ),
    }
  } else if (type === "projects") {
    data = {
      icon: (
        <FaProjectDiagram
          size="24"
          className="text-zinc-500 hover:text-blue-500"
        />
      ),
    }
  } else if (type === "courses") {
    data = {
      icon: <FaBook size="24" className="text-zinc-500 hover:text-blue-500" />,
    }
  } else if (type === "friends") {
    data = {
      icon: (
        <FaUserFriends
          size="24"
          className="text-zinc-500 hover:text-blue-500"
        />
      ),
    }
  } else if (type === "files") {
    data = {
      icon: (
        <FaRegFileAlt size="24" className="text-zinc-500 hover:text-blue-500" />
      ),
    }
  } else if (type === "plans") {
    data = {
      icon: (
        <FaChromecast size="24" className="text-zinc-500 hover:text-blue-500" />
      ),
    }
  }
  return (
    <>
      <li className="flex items-center text-center mb-1 capitalize py-2 px-5 cursor-pointer rounded-md hover:bg-blue-50 duration-300">
        {data.icon}
        <NavLink to={`/${type}`} className="ml-5 hidden sm:block">
          {type}
        </NavLink>
      </li>
    </>
  )
}

export default SidebarItem
