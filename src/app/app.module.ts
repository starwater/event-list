import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EventsListComponent} from './events-list/events-list.component';
import {EventThumbnailComponent} from './events-list/event-thumbnail/event-thumbnail.component';
import {NavComponent} from './nav/nav.component';
import {EventService} from './events-list/shared/event.service';
import {ToastrService} from './common/toastr.service';
import {EventDetailsComponent} from './events-list/event-details/event-details.component';
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';
import {CreateEventComponent} from './events-list/create-event/create-event.component';
import {Error404Component} from './errors/404component';
import {EventRouteActivator} from './events-list/event-details/event-route-activator';
import {EventListResolverService} from './events-list/event-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolverService,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
