import axios from 'axios';
import { IRocket } from '../interfaces/rocket.interface';

export const rocketService = {
    async getRocket(rocketId: string): Promise<IRocket> {
      return await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}rockets/${rocketId}`)
        .then(async (response) => {
          if (response.status === 200) {
            return response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getRockets(): Promise<IRocket[]> {
      return await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}rockets`)
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