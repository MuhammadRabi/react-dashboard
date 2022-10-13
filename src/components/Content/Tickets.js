import React from "react"
import WidgetLayout from "../Layout/WidgetLayout"
import {
  FaRegWindowClose,
  FaRegSun,
  FaCheck,
  FaCalendarAlt,
} from "react-icons/fa"

const Tickets = () => {
  return (
    <>
      <WidgetLayout>
        <h2 className="content-headline">latest tickets</h2>
        <p className="sub-headline">everything about support tickets</p>
        <div className="tickets-wrapper flex flex-wrap justify-between px-6 pt-4">
          <div className="ticket-box border text-center p-5 mb-2 rounded-md border-slate-400 w-full">
            <FaRegWindowClose className="text-red-600 mx-auto mb-2 text-4xl"></FaRegWindowClose>
            <span className="block font-bold">500</span>
            closed
          </div>
          <div className="ticket-box border text-center p-5 mb-2 rounded-md border-slate-400 w-full">
            <FaCalendarAlt className="text-yellow-500 mx-auto mb-2 text-4xl"></FaCalendarAlt>
            <span className="block font-bold">100</span>
            open
          </div>
          <div className="ticket-box border text-center p-5 mb-2 rounded-md border-slate-400 w-full">
            <FaCheck className="text-green-600 mx-auto mb-2 text-4xl"></FaCheck>
            <span className="block font-bold">300</span>
            resolved
          </div>
          <div className="ticket-box border text-center p-5 mb-2 rounded-md border-slate-400 w-full">
            <FaRegSun className="text-cyan-600 mx-auto mb-2 text-4xl"></FaRegSun>
            <span className="block font-bold">700</span>
            pending
          </div>
        </div>
      </WidgetLayout>
    </>
  )
}

export default Tickets
