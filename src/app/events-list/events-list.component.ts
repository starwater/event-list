import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from './shared';

declare let toastr;

@Component({
  // selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // the route events
    // this.eventService.getEvents().subscribe((events: any[]) => {
    //   this.events = events;
    // });
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(data) {
    console.log('received', data);
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
