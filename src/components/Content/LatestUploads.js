import WidgetLayout from "../Layout/WidgetLayout"
import LatestUploadItem from "./LatestUploadItem"
import data from "../../data"

const LatestUploads = () => {
  return (
    <>
      <WidgetLayout>
        <div className="latest-upload">
          <h2 className="content-headline">latest Uploads</h2>
          <ul>
            {data.map((item) => {
              return <LatestUploadItem key={item.id} {...item} />
            })}
          </ul>
        </div>
      </WidgetLayout>
    </>
  )
}

export default LatestUploads
