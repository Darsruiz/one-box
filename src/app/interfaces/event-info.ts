import { IEventData } from "./events";
import { ISessionData } from "./sessions";

export interface IEventInfo {
    event: IEventData,
    sessions: ISessionData
}
