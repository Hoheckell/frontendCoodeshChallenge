import { IPayload } from "./payload.interface";
import { IThrust } from "./thrust.interface";

export interface ISecondStage {
  thrust: IThrust;
  payloads: IPayload;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
}
