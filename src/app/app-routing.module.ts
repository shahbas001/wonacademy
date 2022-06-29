import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {HomeComponent } from './home/home.component';
import {AmbassadorsComponent} from './ambassadors/ambassadors.component';
import {FacilitiesComponent} from './facilities/facilities.component';
import {MissionComponent} from './mission/mission.component';
import {PatnershipComponent} from './patnership/patnership.component';
import {AdvisorsComponent} from './advisors/advisors.component';
import {ContactComponent} from './contact/contact.component';
import { from } from 'rxjs'; 



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ambassadors',
    component: AmbassadorsComponent
  },
  {
    path: 'facilities',
    component: FacilitiesComponent
  },
  {
    path: 'mission',
    component: MissionComponent
  },
  {
    path: 'patners',
    component: PatnershipComponent
  },
  {
    path: 'advisors',
    component: AdvisorsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },



]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
