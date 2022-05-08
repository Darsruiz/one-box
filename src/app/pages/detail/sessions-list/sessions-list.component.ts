import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEventInfo } from 'src/app/interfaces/event-info';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.scss']
})
export class SessionsListComponent {

  @Input() eventInfo!: IEventInfo;
  @Output() EmitaddSession = new EventEmitter<string>();
  @Output() EmitdelSession = new EventEmitter<{ date: string, currentAvailability: number }>();

  constructor() { }

  convertDate(date: string): string {
    return new Date
      (
        parseInt(date)
      )
      .toLocaleDateString();
  }

  addSession(date: string, availability: number): void {
    if (availability <= 0) {
      return alert("There aren't any more tickets available")
    }
    this.EmitaddSession.emit(date);
  }

  delSession(date: string, currentAvailability: number): void {
    let e = {
      date,
      currentAvailability
    }
    this.EmitdelSession.emit(e);
  }
}
