import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { IEventInfo } from 'src/app/interfaces/event-info';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  private routeSub!: Subscription;
  private id!: number;
  eventInfo!: IEventInfo;
  constructor(private eventsService: EventsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getEventInfo();
  }

  getEventInfo(): void {
    this.eventsService.getEventInfo(this.id).subscribe(data => this.eventInfo = data);
  }

  AddSession(date: string) {
    let found = this.eventInfo.sessions.find(x => x.date == date)
    if (found != undefined) {
      found.availability--;
    }
    this.eventsService.addSessionToCart(date, this.id)
  }
  DelSession(e: { date: string, currentAvailability: number }) {
    let found = this.eventInfo.sessions.find(x => x.date == e.date)
    let foundElem = this.eventsService.delSessionFromCart(e.date, this.id)
    if (found != undefined && foundElem != -1) {
      found.availability++
    }
    else {
      alert("You've reached the maximum ammount of available tickets")
    }
  };

  EmptySession(date: string) {
    this.eventsService.emptySessionOnCart(date, this.id);
    this.getEventInfo();
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
