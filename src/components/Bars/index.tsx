import { Bar } from "react-chartjs-2";
import style from "./Bar.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { IBarsGraph } from "../../interfaces/bars-graph.interface";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Bars = (data: IBarsGraph) => {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Lançamentos por ano",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  return (
    <div className={style.bargraphdimensions}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Bars;
