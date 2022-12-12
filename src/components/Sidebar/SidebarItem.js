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
        <FaDiceSix
          size="24"
          className="sm:mr-4 text-center text-zinc-500 dark:text-slate-100 hover:text-blue-500"
        />
      ),
    }
  } else if (type === "settings") {
    data = {
      icon: (
        <FaWrench
          size="24"
          className="sm:mr-4 text-zinc-500 dark:text-slate-100 hover:text-blue-500"
        />
      ),
    }
  } else if (type === "profile") {
    data = {
      icon: (
        <FaUserTie
          size="24"
          className="sm:mr-4 text-zinc-500 dark:text-slate-100 hover:text-blue-500"
        />
      ),
    }
  } else if (type === "projects") {
    data = {
      icon: (
        <FaProjectDiagram
          size="24"
          className="sm:mr-4 text-zinc-500 dark:text-slate-100 hover:text-blue-500"
        />
      ),
    }
  } else if (type === "courses") {
    data = {
      icon: (
        <FaBook
          size="24"
          className="sm:mr-4 text-zinc-500 dark:text-slate-100 hover:text-blue-500"
        />
      ),
    }
  } else if (type === "friends") {
    data = {
      icon: (
        <FaUserFriends
          size="24"
          className="sm:mr-4 text-zinc-500 dark:text-slate-100 hover:text-blue-500"
        />
      ),
    }
  } else if (type === "files") {
    data = {
      icon: (
        <FaRegFileAlt
          size="24"
          className="sm:mr-4 text-zinc-500 dark:text-slate-100 hover:text-blue-500"
        />
      ),
    }
  } else if (type === "plans") {
    data = {
      icon: (
        <FaChromecast
          size="24"
          className="sm:mr-4 text-zinc-500 dark:text-slate-100 hover:text-blue-500"
        />
      ),
    }
  }
  return (
    <>
      <li className="mb-1 capitalize cursor-pointer rounded-md hover:bg-blue-50 dark:text-slate-100 dark:hover:bg-blue-800 duration-300">
        <NavLink
          to={type === "dashboard" ? "/" : type}
          className="flex items-center justify-start text-center p-2 rounded-md sm:py-2 sm:px-5"
          end
        >
          {data.icon}
          <span className="hidden sm:block">{type}</span>
        </NavLink>
      </li>
    </>
  )
}

export default SidebarItem
