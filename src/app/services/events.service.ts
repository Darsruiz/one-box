import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IEventInfo } from '../interfaces/event-info';
import { IEventData } from '../interfaces/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  getEvents(): Observable<IEventData[]> {
    return this.httpClient
      .get<IEventData[]>("assets/data/events.json")
      .pipe(retry(1), catchError(this.handleError));;
  };

  getEventInfo(id: number): Observable<IEventInfo> {
    return this.httpClient
      .get<IEventInfo>(`assets/data/event-info-${id}.json`)
      .pipe(retry(1), catchError(this.handleError));;
  };

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
