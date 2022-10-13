import React from "react"
import WidgetLayout from "../Layout/WidgetLayout"
import { RiDeleteBin6Line } from "react-icons/ri"

const LatestTasks = () => {
  return (
    <>
      <WidgetLayout>
        <h2 className="content-headline">latest tasks</h2>
        <article className="flex justify-between py-2 items-center border-b">
          <div className="capitalize text-sm">
            <h5 className="font-bold">coding for 3 hours</h5>
            <p className="text-zinc-400 font-semibold">
              coding a bunch of lines of clean code
            </p>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-lg hover:text-red-500 duration-300" />
        </article>
        <article className="flex justify-between py-2 items-center border-b">
          <div className="capitalize text-sm">
            <h5 className="font-bold">read documentation </h5>
            <p className="text-zinc-400 font-semibold">
              read the documentation to improve your skills
            </p>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-lg hover:text-red-500 duration-300" />
        </article>
        <article className="flex justify-between py-2 items-center border-b">
          <div className="capitalize text-sm">
            <h5 className="font-bold">fixing some bugs</h5>
            <p className="text-zinc-400 font-semibold">
              inspect some code to factor it and extract bugs
            </p>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-lg hover:text-red-500 duration-300" />
        </article>
        <article className="flex justify-between py-2 items-center">
          <div className="capitalize text-sm">
            <h5 className="font-bold">reading for an hour</h5>
            <p className="text-zinc-400 font-semibold">
              read a nice book with a cup of coffe
            </p>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-lg hover:text-red-500 duration-300" />
        </article>
      </WidgetLayout>
    </>
  )
}

export default LatestTasks
