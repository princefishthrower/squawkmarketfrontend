export interface IFeedData {
    sourceType: "base64" | "url";
    source: string; // this can be a base64 or a url, depending on 
    volume: number;
    headline: string;
}