import { IIsp } from "./isp.interface";
import { IThrust } from "./thrust.interface";


export interface IEngine {
  isp: IIsp;

  thrust_sea_level: IThrust;

  thrust_vacuum: IThrust;

  number: number;

  type: string;

  version: string;

  layout: string;

  engine_loss_max: number;

  propellant_1: string;

  propellant_2: string;

  thrust_to_weight: number;
}
