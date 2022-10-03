import WidgetLayout from "../Layout/WidgetLayout"
import BarChart from "./Chart"

const TargetsChart = () => {
  return (
    <>
      <WidgetLayout>
        <h3 className="content-headline">yearly targets</h3>
        <BarChart />
      </WidgetLayout>
    </>
  )
}

export default TargetsChart
