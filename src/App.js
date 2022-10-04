import Home from "./Pages/Home"
import Settings from "./Pages/Settings"
import Profile from "./Pages/Profile"
import Projects from "./Pages/Projects"
import Courses from "./Pages/Courses"
import Friends from "./Pages/Friends"
import Files from "./Pages/Files"
import Plans from "./Pages/Plans"
import { Routes, Route } from "react-router-dom"
import PageLayout from "./components/Layout/PageLayout"
import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"

function App() {
  return (
    <PageLayout>
      <Sidebar />
      <div className="w-full">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="courses" element={<Courses />} />
          <Route path="friends" element={<Friends />} />
          <Route path="files" element={<Files />} />
          <Route path="plans" element={<Plans />} />
        </Routes>
      </div>
    </PageLayout>
  )
}

export default App
