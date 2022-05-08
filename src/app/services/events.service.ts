import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, retry, throwError } from 'rxjs';
import { IEventInfo } from '../interfaces/event-info';
import { IEventDetails } from '../interfaces/event-details';
import { IShoppingCartItem, IShoppingCartQuantity } from '../interfaces/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private shoppingCart: IShoppingCartItem[] = [];
  private cartQuantity: IShoppingCartQuantity[] = [];

  private shoppingCartQuantityObs: BehaviorSubject<IShoppingCartQuantity[]> = new BehaviorSubject<IShoppingCartQuantity[]>(this.cartQuantity);
  shoppingCartQuantity$: Observable<IShoppingCartQuantity[]> = this.shoppingCartQuantityObs.asObservable();

  constructor(private httpClient: HttpClient) { }

  getEvents(): Observable<IEventDetails[]> {
    return this.httpClient
      .get<IEventDetails[]>("assets/data/events.json")
      .pipe(retry(1), catchError(this.handleError));
  };

  getEventInfo(id: number): Observable<IEventInfo> {
    return this.httpClient
      .get<IEventInfo>(`assets/data/event-info-${id}.json`)
      .pipe(retry(1), catchError(this.handleError));
  };

  getCartQuantity(): IShoppingCartQuantity[] {
    let arr: IShoppingCartQuantity[] = [];
    for (const elem of this.shoppingCart) {
      let found = arr.find(x => x.item.eventId == elem.eventId && x.item.sessionDate === elem.sessionDate)
      if (found == undefined) {
        arr.push({
          quantity: 1,
          item: elem
        })
      }
      else {
        found.quantity++
      }
    }
    this.cartQuantity = arr;
    this.shoppingCartQuantityObs.next(this.cartQuantity)
    return arr;
  }

  addSessionToCart(date: string, eventId: number) {
    let event: any;
    this.getEvents().subscribe(data => event = data.find(x => x.id === eventId));

    this.shoppingCart.push({
      eventId: eventId,
      event: event,
      sessionDate: date
    });
    this.getCartQuantity();
  }

  delSessionFromCart(date: string, eventId: number): number {
    let itemIndex = this.shoppingCart.findIndex(item => item.eventId === eventId && item.sessionDate === date);
    this.shoppingCart.splice(itemIndex, 1);
    this.getCartQuantity();
    return itemIndex;
  }

  emptySessionOnCart(date: string, eventId: number): void {
    this.shoppingCart = this.shoppingCart.filter(x => !(x.eventId === eventId && x.sessionDate === date));
    this.getCartQuantity();
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      alert(`Error Obtaining Data: ${errorMessage}`)
    });
  }
}
