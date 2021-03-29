import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {

  constructor(private router : Router,
              private searchData: SearchDataService) {} 

  shelter = this.searchData.getShelter();



  dogs  = [
    {"name":"yuki", "breed":"aussie","shelter":"Katie's Apartment", "contact":"9852599517", "age":"8mo", "timeOn":"3mo"},
    {"name":"sophie", "breed":"german Shephard","shelter":"The Back Porch", "contact":"9857746453", "age":"7yr", "timeOn":"5yr"},
    {"name":"marley", "breed":"labridor","shelter":"Movie", "contact":"dunno", "age":"5yr", "timeOn":"1yr"},
    {"name":"kujo", "breed":"demon","shelter":"Hell", "contact":"Satan's phone", "age":"1000yr", "timeOn":"500yr"},
    {"name":"angel", "breed":"toy poodle","shelter":"Nona's house", "contact":"...", "age":"17yr", "timeOn":"3days"}
  ]

  
  ngOnInit(): void {
  }

}
