import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEventDetails } from 'src/app/interfaces/event-details';
import { EventsService } from 'src/app/services/events.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  events!: Observable<IEventDetails[]>;
  constructor(private eventsService: EventsService) { }
  ngOnInit() {
    this.events = this.eventsService.getEvents()
  }

}
