import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AmbassadorsComponent } from './ambassadors/ambassadors.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { MissionComponent } from './mission/mission.component';
import { PatnershipComponent } from './patnership/patnership.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { GridComponent } from './grid/grid.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AmbassadorsComponent,
    FacilitiesComponent,
    MissionComponent,
    PatnershipComponent,
    AdvisorsComponent,
    ContactComponent,
    AboutComponent,
    BookComponent,
    GridComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
