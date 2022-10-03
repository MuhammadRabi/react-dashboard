import React from "react"

const LatestUploadItem = ({ img, name, author, size }) => {
  return (
    <li className="flex justify-between items-center mb-4 pb-3">
      <img className="w-10 h-10 mr-4" src={img} alt="format" />
      <div className="info text-sm capitalize mr-auto">
        <span className="name block ">{name}</span>
        <span className="author text-slate-400">{author}</span>
      </div>
      <div className="size block text-xs bg-slate-200 rounded-md px-2 py-1">
        {size}
      </div>
    </li>
  )
}

export default LatestUploadItem
