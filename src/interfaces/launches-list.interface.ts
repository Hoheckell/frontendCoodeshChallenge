import { ILaunch } from "./launch.interface";

export interface ILaunchesList {
    results: ILaunch[];
    totalDocs: number;
    page: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
}