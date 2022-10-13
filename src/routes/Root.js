import PageLayout from "../components/Layout/PageLayout"
import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <PageLayout>
      <Sidebar />
      <div className="w-full overflow-hidden">
        <Header />
        <Outlet />
      </div>
    </PageLayout>
  )
}

export default Root
