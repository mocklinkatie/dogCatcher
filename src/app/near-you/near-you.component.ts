import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-near-you',
  templateUrl: './near-you.component.html',
  styleUrls: ['./near-you.component.css']
})
export class NearYouComponent implements OnInit {
  
  constructor(private router : Router,
              private searchData: SearchDataService) {}
  
  
  

 
  
  ngOnInit(): void { 
    console.log("this is in near you")
    console.log(this.searchData.zipcode)
    
    //this.searchData.logData()
    
  }

}
