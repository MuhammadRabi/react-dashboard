import React from "react"
import WidgetLayout from "../Layout/WidgetLayout"

const QuickDraft = () => {
  return (
    <>
      <WidgetLayout>
        <h2 className="content-headline">quick draft</h2>
        <p className="sub-headline">write a draft for your ideas</p>
        <form action="">
          <input
            type="text"
            placeholder="please enter your name"
            className="px-4 py-2 outline-0 capitalize bg-slate-100 rounded-md w-full"
          />
          <textarea
            name="your message"
            placeholder="leave your message here"
            className="bg-slate-100 h-40 capitalize rounded-md mt-4 outline-0 px-4 py-2 w-full"
          ></textarea>
          <input className="button ml-auto" type="submit" value="send" />
        </form>
      </WidgetLayout>
    </>
  )
}

export default QuickDraft
