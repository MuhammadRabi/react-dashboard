import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Net Income",
      },
    },
  }

  const labels = ["2020", "2021", "2022"]

  const data = {
    labels,
    datasets: [
      {
        label: "Person 1",
        data: ["2000", "4000", "9000"],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
      },
      {
        label: "Person 2",
        data: ["5000", "3000", "5500"],
        backgroundColor: "rgba(53, 162, 235, 0.7)",
      },
    ],
  }

  return <Bar options={options} data={data} />
}

export default BarChart
