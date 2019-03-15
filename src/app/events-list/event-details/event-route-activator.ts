import {Router, ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {EventService} from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {

  }

  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot) {
    const evenExists = !!this.eventService.getEvent(+route.params['id']);
    if (!evenExists) {
      // @ts-ignore
      this.router.navigate(['/404']);
    }
    return evenExists;
  }
}
