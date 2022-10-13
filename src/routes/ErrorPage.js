import React from "react"
import { Link } from "react-router-dom"
import errorImage from "../imgs/error.svg"
const ErrorPage = () => {
  return (
    <>
      <div className="content mt-48 mx-auto w-full  flex flex-col justify-center items-center">
        <h1 className=" text-blue-500 font-bold text-3xl ">
          sorry, the page you have requested is not found
        </h1>
        <img src={errorImage} className="w-96 h-96" alt="error" />
        <Link to="/" className="text-center button">
          go home
        </Link>
      </div>
    </>
  )
}

export default ErrorPage
