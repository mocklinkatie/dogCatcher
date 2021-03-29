import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NearYouComponent } from './near-you/near-you.component';
import { ShelterComponent } from './shelter/shelter.component';

const routes: Routes=[
  {path:'home', component:MainPageComponent},
  {path:'', component:MainPageComponent},
  {path:'NearYou', component: NearYouComponent},
  {path:'Shelter', component: ShelterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
