import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/interfaces/events';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  events: Events[] = [
    {
      id: 1,
      title: "TITLE",
      subtitle: "SUBTITLE",
      image: "../../../assets/img/sample-image.jpg",
      description: "DESC",
      startDate: new Date(),
      endDate: new Date(),
      place: "PLACE"
    },
    {
      id: 1,
      title: "TITLE",
      subtitle: "SUBTITLE",
      image: "../../../assets/img/sample-image.jpg",
      description: "DESC",
      startDate: new Date(),
      endDate: new Date(),
      place: "PLACE"
    },
    {
      id: 1,
      title: "TITLE",
      subtitle: "SUBTITLE",
      image: "../../../assets/img/sample-image.jpg",
      description: "DESC",
      startDate: new Date(),
      endDate: new Date(),
      place: "PLACE"
    },
    {
      id: 1,
      title: "TITLE",
      subtitle: "SUBTITLE",
      image: "../../../assets/img/sample-image.jpg",
      description: "DESC",
      startDate: new Date(),
      endDate: new Date(),
      place: "PLACE"
    },
  ];

}
