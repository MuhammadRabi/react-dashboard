import { FaDiceSix } from "react-icons/fa"

const SidebarItem = ({ name }) => {
  return (
    <>
      <li className="flex items-center text-center mb-1 capitalize py-2 px-5 cursor-pointer rounded-md hover:bg-blue-50 duration-300">
        <FaDiceSix size="24" className="text-zinc-500 hover:text-blue-500" />
        <span className="ml-2 hidden sm:block">{name}</span>
      </li>
    </>
  )
}

export default SidebarItem
