import { Component, OnInit } from '@angular/core';
import { IEventData } from 'src/app/interfaces/events';
import { EventsService } from 'src/app/services/events.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  events!: IEventData[];
  constructor(private eventsService: EventsService) { }
  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventsService.getEvents()
      .subscribe(data => { this.events = data.sort((a, b) => { return parseInt(b.endDate) - parseInt(a.endDate) }) });
  }
}
