import { Component, Input, OnInit } from '@angular/core';
import { ISessionData } from 'src/app/interfaces/sessions';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.scss']
})
export class SessionsListComponent {

  @Input() sessions!: ISessionData[];

  constructor() { }

  ConvertDate(date: string): string {
    let localeDate = new Date
      (
        parseInt(date)
      )
      .toLocaleDateString();
    return localeDate;
  }

  AddSession(date: string): void {
    alert("Added!");
  }

  DelSession(date: string): void {
    alert("Deleted!")
  }
}
