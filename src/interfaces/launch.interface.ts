import { ICores } from "./cores.interface";
import { IFairings } from "./fairings.interface";
import { ILinks } from "./links.interface";

export interface ILaunch {

  id: string;
  fairings: IFairings | null;
  links: ILinks;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: Array<any>;
  details: string;
  crew: Array<string>;
  ships: Array<string>;
  capsules: Array<string>;
  payloads: Array<string>;
  launchpad: string;
  auto_update: boolean;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Array<ICores>;
}