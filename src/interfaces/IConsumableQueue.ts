import { IFeedData } from "./IFeedData";

export interface IConsumableQueue {
  add: (item: IFeedData) => void;
  removeAll: () => void;
}
