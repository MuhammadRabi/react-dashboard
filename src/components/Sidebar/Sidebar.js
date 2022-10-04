import React from "react"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <div className="sidebar py-2 bg-white relative">
      <h3 className="content-headline">sidebar</h3>
      <ul className="mt-12 px-3">
        <SidebarItem type="dashboard" />
        <SidebarItem type="settings" />
        <SidebarItem type="profile" />
        <SidebarItem type="projects" />
        <SidebarItem type="courses" />
        <SidebarItem type="friends" />
        <SidebarItem type="files" />
        <SidebarItem type="plans" />
      </ul>
      <footer>options</footer>
    </div>
  )
}

export default Sidebar
