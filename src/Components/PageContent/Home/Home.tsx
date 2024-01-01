import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import React from "react";
import "./Home.scss";
import { userAnalysis, TypeCheck } from "../../../Constants/Constants";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
function Home() {
  const userAnalysisData = {
    labels: Object.keys(userAnalysis),
    datasets: [
      {
        label: "user wish",
        data: Object.values(userAnalysis),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        offset: 5,
      },
    ],
  };
  const arr=Object.keys(TypeCheck);
  const length=arr.map(item=>item.length);
  console.log(length);
  const genreData = {
    labels: Object.keys(TypeCheck),
    datasets: [
      {
        label: "Genre Available status",
        data:length,
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
      },
    ],
  };
  return (
    <div className="homeChart">
      <div>
        <h3>User Wish</h3>
        <Pie data={userAnalysisData} />
      </div>
      <div>
        <h3>Collections</h3>
        <Pie data={genreData} />
      </div>
    </div>
  );
}

export default Home;
