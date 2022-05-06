import { IEventDetails } from "./event-details";

export interface IShoppingCart {
    items: IShoppingCartItems[];
}

export interface IShoppingCartItems {
    eventId: number;
    event: IEventDetails;
    eventSessions: ISessionCart[];
}
export interface ISessionCart { // This wouldn't be needed if sessions referenced the eventId they are linked to.
    sessionDate: string;
    quantity: number;
}