import { IDiameter } from "./diameter.interface";
import { IEngine } from "./engine.interface";
import { IFirstStage } from "./firstStage.interface";
import { IHeight } from "./height.interface";
import { ILandingLegs } from "./landing-legs.interface";
import { IMass } from "./mass.interface";
import { IPayloadWeight } from "./payload-weight.interface";
import { ISecondStage } from "./second-stage.interface";

export interface IRocket {
  id: string;
  height: IHeight;
  diameter: IDiameter;
  mass: IMass;
  first_stage: IFirstStage;
  second_stage: ISecondStage;
  engines: IEngine;
  landing_legs: ILandingLegs;
  payload_weights: Array<IPayloadWeight>;
  flickr_images: Array<string>;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
}