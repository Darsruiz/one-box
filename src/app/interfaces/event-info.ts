import { IEventDetails } from "./event-details";
import { ISessionData } from "./sessions";

export interface IEventInfo {
    event: IEventDetails,
    sessions: ISessionData[];
}
