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

  
  
  zipcode = this.searchData.getZip();
  breed = this.searchData.getBreed();

  dogs  = [
    {"name":"yuki", "breed":"aussie","shelter":"Katie's Apartment", "contact":"9852599517", "age":"8mo", "timeOn":"3mo"},
    {"name":"sophie", "breed":"german Shephard","shelter":"The Back Porch", "contact":"9857746453", "age":"7yr", "timeOn":"5yr"},
    {"name":"marley", "breed":"labridor","shelter":"Movie", "contact":"dunno", "age":"5yr", "timeOn":"1yr"},
    {"name":"kujo", "breed":"demon","shelter":"Hell", "contact":"Satan's phone", "age":"1000yr", "timeOn":"500yr"},
    {"name":"angel", "breed":"toy poodle","shelter":"Nona's house", "contact":"...", "age":"17yr", "timeOn":"3days"}
  ]


  

 
  
  ngOnInit(): void { 
    

    console.log("this is in near you")
    
    console.log("zipcode:" + this.zipcode) 
    console.log("breed:" + this.breed)
    
    
    
    
    //this.searchData.logData()
    
  }

}
