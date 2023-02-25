export interface IFeedData {
  sourceType: "base64" | "url";
  source: string; // this can be a base64 or a url, depending on what is to be played
  volume: number;
  feed: string;
  squawk: string;
  link: string | null;
}
