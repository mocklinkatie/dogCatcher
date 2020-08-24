import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { SearchDataService } from './search-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchDataService]
})
export class AppComponent {
  title = 'our-app';
  constructor(private router : Router,
    private searchData: SearchDataService) {}
  

  goHome(){
    this.router.navigate(['/home'])

  }
}
