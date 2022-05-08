import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEventInfo } from 'src/app/interfaces/event-info';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.scss']
})
export class SessionsListComponent {

  @Input() eventInfo!: IEventInfo;
  @Output() EmitAddSession = new EventEmitter<string>();
  @Output() EmitDelSession = new EventEmitter<{ date: string, currentAvailability: number }>();

  constructor() { }

  ConvertDate(date: string): string {
    let localeDate = new Date
      (
        parseInt(date)
      )
      .toLocaleDateString();
    return localeDate;
  }

  AddSession(date: string, availability: number): void {
    if (availability <= 0) {
      return alert("There aren't any more tickets available")
    }
    this.EmitAddSession.emit(date);
  }

  DelSession(date: string, currentAvailability: number): void {
    let e = {
      date,
      currentAvailability
    }
    this.EmitDelSession.emit(e);
  }
}
