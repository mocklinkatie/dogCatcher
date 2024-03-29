import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { SearchDataService } from '../search-data.service';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [SearchDataService]
})
export class MainPageComponent implements OnInit {

  constructor(private router : Router,
              private searchData: SearchDataService) {}

  zipcode=''
  breed=''
  shelterName=''

  ngOnInit(): void {
  }
  goNearYou(){
    this.searchData.setZip(this.zipcode)
    this.searchData.setBreed(this.breed)
    if(this.zipcode)
    {
      this.router.navigate(['/NearYou']);
    }
    

  }
  goShelter(){
    this.searchData.setShelter(this.shelterName)
    if(this.shelterName){
      this.router.navigate(['/Shelter']);
    }
    
 

  }
  goForum(){
    console.log('forum clicked')
    //this.router.navigate(['/forum'])
    
  }

}
