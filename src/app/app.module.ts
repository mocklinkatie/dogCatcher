import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NearYouComponent } from './near-you/near-you.component';
import { ShelterComponent } from './shelter/shelter.component';





@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NearYouComponent,
    ShelterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
