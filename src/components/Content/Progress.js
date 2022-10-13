import WidgetLayout from "../Layout/WidgetLayout"
import rocket from "../../imgs/project.png"

const Progress = () => {
  return (
    <>
      <WidgetLayout>
        <h2 className="content-headline blue">latest projects progress</h2>
        <div className="progress-content relative">
          <ul className="project-list relative mt-5 ml-2 pl-4 capitalize">
            <li className="relative p-1.5 mb-1 done">wireframes ready</li>
            <li className="relative p-1.5 mb-1 done">backend scheme</li>
            <li className="relative p-1.5 mb-1 done">starting coding</li>
            <li className="relative p-1.5 mb-1 pending">checking for bugs</li>
            <li className="relative p-1.5 mb-1 empty">delivery to client</li>
          </ul>
          <img
            src={rocket}
            className="w-24 h-24 absolute bottom-0 right-0 opacity-25"
            alt="progress"
          />
        </div>
      </WidgetLayout>
    </>
  )
}

export default Progress
