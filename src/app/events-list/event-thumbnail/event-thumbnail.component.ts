import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IEvent} from '../shared';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();
  someProperty: any = 'some value';

  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }

  logFoo() {
    console.log('foo');
  }

  whoisthebest() {
    console.log('kayla');
  }

  constructor() {
  }

  ngOnInit() {
  }

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {green: isEarlyStart, bold: isEarlyStart};
  }
}
