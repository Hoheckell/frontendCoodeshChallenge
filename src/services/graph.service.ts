import axios from 'axios';
import { IPieGraph } from '../interfaces/pie-graph.interface';
import { IBarsGraph } from '../interfaces/bars-graph.interface';

export const graphService = {
  async getPieData(): Promise<IPieGraph> {
    return await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}launches/stats/pizza`)
      .then(async (response) => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async getBarData(): Promise<IBarsGraph> {
    return await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}launches/stats/bar`)
      .then(async (response) => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
}