import { IEventDetails } from './event-details';

export interface IShoppingCartQuantity {
    quantity: number,
    item: IShoppingCartItem
}
export interface IShoppingCartItem {
    eventId: number;
    event?: IEventDetails;
    sessionDate: string;
}