import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEventData } from 'src/app/interfaces/events';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() event!: IEventData;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let start = parseInt(this.event.startDate);
    let end = parseInt(this.event.endDate);
    this.event.startDate = new Date(start).toLocaleDateString();
    this.event.endDate = new Date(end).toLocaleDateString();
  }

  ViewDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }
}
