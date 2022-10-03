import { tableData } from "./data"

const ProjectProgress = () => {
  return (
    <>
      <div className="bg-white m-5 rounded-md px-3 md:px-6 py-4 shadow-md">
        <h2 className="content-headline">project progress</h2>
        <div className="overflow-x-auto">
          <table className="w-full capitalize">
            <thead className="bg-zinc-100 border">
              <tr className="font-bold">
                <td>name</td>
                <td>finish date</td>
                <td>client</td>
                <td>price</td>
                <td>team</td>
                <td>status</td>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => {
                return (
                  <tr>
                    <td>{item.projectName}</td>
                    <td>{item.finishDate}</td>
                    <td>{item.client}</td>
                    <td>${item.price}</td>
                    <td className="flex justify-center">
                      <img
                        src={item.img[0]}
                        alt="member1"
                        className="w-8 h-8 rounded-full"
                      />
                      <img
                        src={item.img[1]}
                        alt="member2"
                        className="w-8 h-8 rounded-full"
                      />
                      <img
                        src={item.img[2]}
                        alt="member3"
                        className="w-8 h-8 rounded-full"
                      />
                      <img
                        src={item.img[3]}
                        alt="member4"
                        className="w-8 h-8 rounded-full"
                      />
                    </td>
                    <td className="border">
                      <span>{item.status}</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProjectProgress
