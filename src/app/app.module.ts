import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { StickiesComponent } from './stickies/stickies.component';
import { SplashComponent } from './splash/splash.component';
import { routing } from './app.routing';
import { AddStickyComponent } from './add-sticky/add-sticky.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    StickiesComponent,
    SplashComponent,
    AddStickyComponent,
    AddTicketComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
