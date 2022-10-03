import React from "react"
import WidgetLayout from "../Layout/WidgetLayout"

const TopSearch = () => {
  return (
    <>
      <WidgetLayout>
        <h3 className="content-headline">top search results</h3>
        <div className="flex justify-between mb-1 capitalize text-zinc-400 text-sm">
          <h5>keyword</h5>
          <span>search count</span>
        </div>
        <div className="flex justify-between items-center capitalize space-y-5">
          <h5>javascript</h5>
          <span className="bg-zinc-100 px-2 py-0.5 rounded-md text-xs">
            500
          </span>
        </div>
        <div className="flex justify-between items-center capitalize space-y-5">
          <h5>typescript</h5>
          <span className="bg-zinc-100 px-2 py-0.5 rounded-md text-xs">
            700
          </span>
        </div>
        <div className="flex justify-between items-center capitalize space-y-5">
          <h5>programming</h5>
          <span className="bg-zinc-100 px-2 py-0.5 rounded-md text-xs">
            400
          </span>
        </div>
        <div className="flex justify-between items-center capitalize space-y-5">
          <h5>Css</h5>
          <span className="bg-zinc-100 px-2 py-0.5 rounded-md text-xs">
            300
          </span>
        </div>
        <div className="flex justify-between items-center capitalize space-y-5">
          <h5>java</h5>
          <span className="bg-zinc-100 px-2 py-0.5 rounded-md text-xs">
            100
          </span>
        </div>
      </WidgetLayout>
    </>
  )
}

export default TopSearch
