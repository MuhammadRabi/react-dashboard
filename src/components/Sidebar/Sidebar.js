import React from "react"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <div className="sidebar py-2 bg-white relative">
      <h3 className="content-headline">sidebar</h3>
      <ul className="mt-12 px-3">
        <SidebarItem name="dashboard" />
        <SidebarItem name="settings" />
        <SidebarItem name="profile" />
        <SidebarItem name="projects" />
        <SidebarItem name="courses" />
        <SidebarItem name="friends" />
        <SidebarItem name="files" />
        <SidebarItem name="plans" />
      </ul>
      <footer>options</footer>
    </div>
  )
}

export default Sidebar
