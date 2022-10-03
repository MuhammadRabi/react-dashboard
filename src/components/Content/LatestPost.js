import WidgetLayout from "../Layout/WidgetLayout"
import avatar from "../../imgs/avatar.png"
import { FaHeart, FaRegComments } from "react-icons/fa"
const LatestPost = () => {
  return (
    <>
      <WidgetLayout>
        <h3 className="content-headline">latest post</h3>
        <div className="flex flex-col">
          <div className="flex justify-start items-center mb-4 pb-4 border-b-2 border-gray-100">
            <img src={avatar} className="w-12 h-12 mr-4" alt="avatar" />
            <div className="info capitalize">
              <p className="text-xs lg:text-sm mb-0 font-bold">Muhammad Rabi</p>
              <span className="text-xs text-zinc-500">about 3 hours ago</span>
            </div>
          </div>
          <p className="leading-5 border-b-2 pb-5 border-gray-100">
            Be who you are and say what you feel, because those who mind don't
            matter, and those who matter don't mind.
          </p>
          <div className="flex justify-between text-zinc-500">
            <div className="flex items-center justify-around space-x-1 pt-2 pb-1">
              <FaHeart className="hover:text-red-500 duration-300 cursor-pointer" />
              <span>1.4k</span>
            </div>
            <div className="flex items-center justify-around space-x-1">
              <FaRegComments className="hover:text-green-500 duration-300 cursor-pointer" />
              <span>500</span>
            </div>
          </div>
        </div>
      </WidgetLayout>
    </>
  )
}

export default LatestPost
