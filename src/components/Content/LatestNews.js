import WidgetLayout from "../Layout/WidgetLayout"
import pic1 from "../../imgs/news-01.png"
import pic2 from "../../imgs/news-02.png"
import pic3 from "../../imgs/news-03.png"
import pic4 from "../../imgs/news-04.png"

const LatestNews = () => {
  return (
    <>
      <WidgetLayout>
        <h3 className="content-headline">latest news</h3>
        <div className="flex flex-col sm:flex-row text-center md:text-left justify-between items-center py-4 border-b border-slate-100 ">
          <img src={pic1} className="w-20 h-14 rounded-md" alt="pic1" />
          <article className="capitalize">
            <h5 className="font-bold mt-4 sm:mt-1">changed the design</h5>
            <span className="text-sm text-zinc-400">
              a brand new website design
            </span>
          </article>
          <div className="capitalize rounded-md text-xs py-1 px-3 bg-zinc-100">
            7 days ago
          </div>
        </div>
        <div className="flex flex-col sm:flex-row text-center md:text-left justify-between items-center py-4 border-b border-slate-100 ">
          <img src={pic2} className="w-20 h-14 rounded-md" alt="pic1" />
          <article className="capitalize">
            <h5 className="font-bold mt-4 sm:mt-1">changed the design</h5>
            <span className="text-sm text-zinc-400">
              a brand new website design
            </span>
          </article>
          <div className="capitalize rounded-md text-xs py-1 px-3 bg-zinc-100">
            4 days ago
          </div>
        </div>
        <div className="flex flex-col sm:flex-row text-center md:text-left justify-between items-center py-4 border-b border-slate-100 ">
          <img src={pic3} className="w-20 h-14 rounded-md" alt="pic1" />
          <article className="capitalize">
            <h5 className="font-bold mt-4 sm:mt-1">changed the design</h5>
            <span className="text-sm text-zinc-400">
              a brand new website design
            </span>
          </article>
          <div className="capitalize rounded-md text-xs py-1 px-3 bg-zinc-100">
            5 days ago
          </div>
        </div>
        <div className="flex flex-col sm:flex-row text-center md:text-left justify-between items-center py-4 border-b border-slate-100 ">
          <img src={pic4} className="w-20 h-14 rounded-md" alt="pic1" />
          <article className="capitalize">
            <h5 className="font-bold mt-4 sm:mt-1">changed the design</h5>
            <span className="text-sm text-zinc-400">
              a brand new website design
            </span>
          </article>
          <div className="capitalize rounded-md text-xs py-1 px-3 bg-zinc-100">
            2 days ago
          </div>
        </div>
      </WidgetLayout>
    </>
  )
}

export default LatestNews
