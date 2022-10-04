import Welcome from "../components/Content/Welcome"
import QuickDraft from "../components/Content/QuickDraft"
import LatestNews from "../components/Content/LatestNews"
import LatestPost from "../components/Content/LatestPost"
import Tickets from "../components/Content/Tickets"
import SocialMedia from "../components/Content/SocialMedia"
import Reminder from "../components/Content/Reminder"
import Progress from "../components/Content/Progress"
import LatestUploads from "../components/Content/LatestUploads"
import TargetsChart from "../components/Content/TargetsChart"
import LatestTasks from "../components/Content/LatestTasks"
import TopSearch from "../components/Content/TopSearch"

const Home = () => {
  return (
    <>
      <div className="wrapper mb-7 mx-3 md:mx-5 gap-3 md:gap-5">
        <Welcome />
        <QuickDraft />
        <TargetsChart />
        <LatestNews />
        <Reminder />
        <Tickets />
        <SocialMedia />
        <Progress />
        <LatestUploads />
        <LatestPost />
        <LatestTasks />
        <TopSearch />
      </div>
    </>
  )
}

export default Home
