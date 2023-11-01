import { IThrust } from "./thrust.interface";

export interface IFirstStage {
  thrust_sea_level: IThrust;

  thrust_vacuum: IThrust;

  reusable: boolean;

  engines: number;

  fuel_amount_tons: number;

  burn_time_sec: number;
}
