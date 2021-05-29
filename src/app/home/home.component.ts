import {  AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from, pipe } from 'rxjs';
import { DesignUtilityService } from '../service/design-utility.service';
import {debounceTime, distinctUntilChanged, filter, map, pluck, switchMap} from 'rxjs/operators'
// import { Search } from '../interface/search.interface';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  textData:string = 'Stay Home Stay Safe'
  

 countries = ''
 activeCase = 0
 deaths = 0
 date:any
 recovered = 0
 confirmed = 0
 totalConfirm:Number;
 totalDeaths:Number;
 totalRecover:Number;
 searchResult ;


 @ViewChild('searchForm') searchForm:NgForm;

 
 constructor(private _du:DesignUtilityService, private router:Router, private route:ActivatedRoute) {}

ngAfterViewInit(){
  // this._du.getCoronaRealData('india').subscribe(res => {
  //   console.log(res)
  // })
  // const formValue = this.searchForm.valueChanges;

  // formValue.pipe(
  //   // map(res => res.searchTerm),
  //   filter(() => this.searchForm.valid),
  //   pluck('searchTerm'),
  //   debounceTime(300),
  //   distinctUntilChanged(),
  //   switchMap(data => this._du.getCoronaRealData(data))
  // ).subscribe((data) => {
  //   console.log(data)
  //   this.searchResult = data.Country;
  // })
}
  
  ngOnInit(): void {
    this._du.getCountry().subscribe(res => {
     this.countries = res;
    })

    
 this.getWorldData()
    
  }
 

  getCoronaData(name){
    
    let countryName = name;
   this.router.navigate(['list'],{
      queryParams:{
        data:countryName,
    
      }
    })
    }

    getCountry(country){
      this.countries = country
    console.log(country)
   }
  
  getWorldData(){
    this._du.getTotal().subscribe(data => {
      // console.log(data);
      this.totalConfirm  = data.TotalConfirmed;
      this.totalDeaths = data.TotalDeaths;
      this.totalRecover = data.TotalRecovered;
    })
  }

}