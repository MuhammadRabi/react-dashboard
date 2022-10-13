import WidgetLayout from "../Layout/WidgetLayout"

const Reminder = () => {
  return (
    <>
      <WidgetLayout>
        <h2 className="content-headline">reminders</h2>
        <article className="reminder relative border-l-4 border-green-500 py-2 pl-4 ml-12 my-4">
          <h5 className="font-bold capitalize mb-1">check my tasks list</h5>
          <p className="text-xs text-slate-400">30-09-2022 4:24 PM</p>
        </article>
        <article className="reminder relative border-l-4 border-red-600 py-2 pl-4 ml-12 mb-4">
          <h5 className="font-bold capitalize mb-1">check my tasks list</h5>
          <p className="text-xs text-slate-400">30-09-2022 4:24 PM</p>
        </article>
        <article className="reminder relative border-l-4 border-blue-500 py-2 pl-4 ml-12 mb-4">
          <h5 className="font-bold capitalize mb-1">check my tasks list</h5>
          <p className="text-xs text-slate-400">30-09-2022 4:24 PM</p>
        </article>
        <article className="reminder relative border-l-4 border-orange-400 py-2 pl-4 ml-12 mb-4">
          <h5 className="font-bold capitalize mb-1">check my tasks list</h5>
          <p className="text-xs text-slate-400">30-09-2022 4:24 PM</p>
        </article>
      </WidgetLayout>
    </>
  )
}

export default Reminder
