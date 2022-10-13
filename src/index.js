import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Root from "./routes/Root"
import Index from "./routes/Index"
import Settings from "./routes/Settings"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Profile from "./routes/Profile"
import Projects from "./routes/Projects"
import Courses from "./routes/Courses"
import Friends from "./routes/Friends"
import Files from "./routes/Files"
import Plans from "./routes/Plans"
import ErrorPage from "./routes/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "files",
        element: <Files />,
      },
      {
        path: "plans",
        element: <Plans />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
