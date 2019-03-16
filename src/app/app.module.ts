import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {ToastrService} from './common/toastr.service';
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';

import {Error404Component} from './errors/404component';


import {
  EventService,
  EventDetailsComponent,
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventListResolverService,
  EventRouteActivator

} from './events-list/index';
import {AuthService} from './user/auth.service';

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
    RouterModule.forRoot(appRoutes),
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolverService,
    AuthService,
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
