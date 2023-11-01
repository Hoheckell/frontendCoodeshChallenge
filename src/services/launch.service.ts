import axios from "axios";
import { ILaunchesList } from '../interfaces/launches-list.interface';

export const launchService = {
    async getLaunches(): Promise<ILaunchesList> {
      return await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}launches`)
        .then(async (response) => {
          if (response.status === 200) {
            return response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async search(term: string): Promise<ILaunchesList> {
      return await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}launches?search=${term}`)
        .then(async (response) => {
          if (response.status === 200) {
            return response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
}