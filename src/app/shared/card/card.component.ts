import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEventDetails } from 'src/app/interfaces/event-details';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() event!: IEventDetails;

  constructor(private router: Router) { }

  ViewDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  convertDate(date: string): string {
    return new Date
      (
        parseInt(date)
      )
      .toLocaleDateString();
  }
}
