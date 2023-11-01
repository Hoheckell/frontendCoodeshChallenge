import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import style from "./Pizza.module.scss";
import { IPieGraph } from "../../interfaces/pie-graph.interface";
import { backgroundColors, borderColors } from '../../config/colors-pizza-graph.config';

ChartJS.register(ArcElement, Tooltip, Legend);

const Pizza = (data: IPieGraph) => {
  data.datasets[0].backgroundColor = backgroundColors;
  data.datasets[0].borderColor = borderColors;
  data.datasets[0].borderWidth = 1;
  return (
    <div className={style.graphPad}>
      <Pie data={data} />
      <br />
      <div className={style.success_fail}>
        <strong>Resultado de lançamento</strong><br />
        Sucesso: <strong className={style.succcess}>{data.success}</strong>
        <br />
        Falha: <strong className={style.fail}>{data.fail}</strong>
      </div>
    </div>
  );
};

export default Pizza;
