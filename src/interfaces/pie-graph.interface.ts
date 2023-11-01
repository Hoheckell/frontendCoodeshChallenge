import { IPieGraphDataset } from "./pie-graph-dataset.inteface";

export interface IPieGraph {

    labels: string[];
    datasets: IPieGraphDataset[];
    success: number;
    fail: number;

}