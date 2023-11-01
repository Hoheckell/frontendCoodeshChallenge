import { IFlickr } from "./flickr.interface";
import { IPatch } from "./patch.interface";
import { IReddit } from "./reddit.interface";

export interface ILinks {
    patch: IPatch;
    reddit: IReddit;
    flickr: IFlickr;
    presskit: string;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
  }
  