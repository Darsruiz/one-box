import { IEventDetails } from './event-details';

export interface IShoppingCart {
    items: IShoppingCartItems[];
}

export interface IShoppingCartItems {
    eventId: number;
    event: IEventDetails;
    eventSessions: ISessionCart[];
}
export interface ISessionCart {
    sessionDate: string;
    quantity: number;
}