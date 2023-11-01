import { IBarsDataset } from "./bars-graph-dataset.interface";

export interface IBarsGraph {
    labels: string[];
    datasets: IBarsDataset[]
}