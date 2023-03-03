import * as signalR from "@microsoft/signalr";
import { AppDispatch } from "../redux/store";
import { setIsConnected } from "../redux/feedSlice";
import { playFile } from "../utils/playFile";
import { getAccessToken } from "../utils/getAccessToken";

export class Hub {
  private static instance: Hub;
  public hubConnection: signalR.HubConnection;

  private constructor(
    setIsError: (isError: boolean) => void,
    dispatch: AppDispatch
  ) {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${process.env.GATSBY_API_URL}/feeds`, {
        accessTokenFactory: () => getAccessToken(),
      })
      .withHubProtocol(new signalR.JsonHubProtocol())
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.hubConnection.onclose((error) => {
      console.log("firing on close!, error is ", error);
      setIsError(true);
      dispatch(setIsConnected(false));
      playFile("/connectionlost.mp3");
    });
  }

  public static getInstance(
    setIsError: (isError: boolean) => void,
    dispatch: AppDispatch
  ): Hub {
    if (!Hub.instance) {
      Hub.instance = new Hub(setIsError, dispatch);
    }
    return Hub.instance;
  }

  public static getExistingInstance(): Hub {
    return Hub.instance;
  }

  public start(): Promise<void> {
    return this.hubConnection.start();
  }

  public on(eventName: string, callback: (...args: any[]) => void): void {
    this.hubConnection.on(eventName, callback);
  }

  public off(eventName: string, callback: (...args: any[]) => void): void {
    this.hubConnection.off(eventName, callback);
  }

  public async invoke(methodName: string, ...args: any[]): Promise<any> {
    return this.hubConnection.invoke(methodName, ...args);
  }
}

export default Hub;
