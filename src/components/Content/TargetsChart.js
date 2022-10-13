import WidgetLayout from "../Layout/WidgetLayout"
import BarChart from "./Chart"

const TargetsChart = () => {
  return (
    <>
      <WidgetLayout>
        <h2 className="content-headline">yearly targets</h2>
        <BarChart />
      </WidgetLayout>
    </>
  )
}

export default TargetsChart
