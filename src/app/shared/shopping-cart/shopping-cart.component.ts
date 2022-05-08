import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IShoppingCartQuantity } from 'src/app/interfaces/shopping-cart';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Output() updateListEvent = new EventEmitter<string>();

  cart!: IShoppingCartQuantity[];
  subscription!: Subscription;
  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.subscription = this.eventService.shoppingCartQuantity$.subscribe(data => this.cart = data)
  }

  emptySession(date: string, eventId: number) {
    this.eventService.emptySessionOnCart(date, eventId);
    this.updateListEvent.emit("value");
  }

  convertDate(date: string): string {
    let localeDate = new Date
      (
        parseInt(date)
      )
      .toLocaleDateString();
    return localeDate;
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}