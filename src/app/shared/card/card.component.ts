import { Component, Input } from '@angular/core';
import { Events } from 'src/app/interfaces/events';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() event!: Events;
}
