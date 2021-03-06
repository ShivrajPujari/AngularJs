
import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component'; // <-- NgModel lives here
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';

//  import {MatToolbarModule} from '@angular/material/toolbar';

//  import { MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
