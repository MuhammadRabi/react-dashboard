import React from "react"
import WidgetLayout from "../Layout/WidgetLayout"
import welcome from "../../imgs/welcome.png"
import avatar from "../../imgs/avatar.png"

const Welcome = () => {
  return (
    <>
      <WidgetLayout>
        <div className="welcome">
          <div className="intro flex justify-between bg-zinc-50 px-2 py-8 rounded-md relative">
            <div className="capitalize">
              <h2 className="font-bold text-2xl">welcome</h2>
              <span className="text-slate-600">Muhammad</span>
              <img
                src={avatar}
                alt="avatar"
                className="rounded-full w-16 h-16 absolute top-28 left-0 border-2 block border-white outline outline-1 outline-zinc-300"
              />
            </div>
            <img src={welcome} alt="welcome" className="w-40" />
          </div>
          <div className="body capitalize flex justify-around item-center text-center py-4 mt-8 mb-2 border-t border-b">
            <div>
              Muhammad Rabi
              <span className="block text-zinc-400 text-sm font-semibold">
                Web developer
              </span>
            </div>
            <div>
              projects
              <span className="block text-zinc-400 text-sm font-semibold">
                15
              </span>
            </div>
            <div>
              earnings
              <span className="block text-zinc-400 text-sm font-semibold">
                $30,000
              </span>
            </div>
          </div>
          <button className="button ml-auto">profile</button>
        </div>
      </WidgetLayout>
    </>
  )
}

export default Welcome
