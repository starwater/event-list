import {Routes} from '@angular/router';
import {EventsListComponent} from './events-list/events-list.component';
import {EventDetailsComponent} from './events-list/event-details/event-details.component';
import {CreateEventComponent} from './events-list/create-event/create-event.component';
import {Error404Component} from './errors/404component';
import {EventRouteActivator} from './events-list/event-details/event-route-activator';
import {EventListResolverService} from './events-list/event-list-resolver.service';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  // , resolve: {events: EventListResolverService}
];
