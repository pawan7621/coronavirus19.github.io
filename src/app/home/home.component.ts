import {  Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from, pipe } from 'rxjs';
import { DesignUtilityService } from '../service/design-utility.service';
import {concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap} from 'rxjs/operators'
// import { Search } from '../interface/search.interface';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textData:string = 'Stay Home Stay Safe'
  
  
  countryName = [
    {name:'Afghanistan'},
    {name:'Albania'},
    {name:'Algeria'},
    {name:'Andorra'},
    {name:'Angola'},
    {name:'Argentina'},
    {name:'Armenia'},
    {name:'Australia'},
    {name:'Austria'},
    {name:'Azerbaijan'},
    {name:'Bahamas'},
    {name:'Bahrain'},
    {name:'Bangladesh'},
    {name:'Barbados'},
    {name:'Belarus'},
    {name:'Belgium'},
    {name:'Belize'},
    {name:'Benin'},
    {name:'Bhutan'},
    {name:'Bolivia'},
    {name:'Botswana'},
    {name:'Brazil'},
    {name:'Bulgaria'},
    {name:'Burundi'},
    {name:'Cambodia'},
    {name:'Cameroon'},
    {name:'Canada'},
    {name:'Central African Republic'},
    {name:'Chad'},
    {name:'Chile'},
    {name:'China'},
    {name:'Colombia'},
    {name:'Comoros'},
    {name:'Congo'},
    {name:'Costa Rica'},
    {name:'Croatia'},
    {name:'Cuba'},
    {name:'Cyprus'},
    {name:'Denmark'},
    {name:'Djibouti'},
    {name:'Dominica'},
    {name:'Ecuador'},
    {name:'Egypt'},
    {name:'Equatorial Guinea'},
    {name:'Eritrea'},
    {name:'Estonia'},
    {name:'Ethiopia'},
    {name:'Fiji'},
    {name:'Finland'},
    {name:'France'},
    {name:'Gabon'},
    {name:'Gambia'},
    {name:'Georgia'},
    {name:'Germany'},
    {name:'Ghana'},
    {name:'Greece'},
    {name:'Grenada'},
    {name:'Guatemala'},
    {name:'Guinea'},
    {name:'Guyana'},
    {name:'Haiti'},
    {name:'Honduras'},
    {name:'Hungary'},
    {name:'Iceland'},
    {name:'India'},
    {name:'Indonesia'},
    {name:'Iraq'},
    {name:'Ireland'},
    {name:'Israel'},
    {name:'Italy'},
    {name:'Jamaica'},
    {name:'Japan'},
    {name:'Jordan'},
    {name:'Kazakhstan'},
    {name:'Kenya'},
    {name:'Kiribati'},
    {name:'Kuwait'},
    {name:'Kyrgyzstan'},
    {name:'Latvia'},
    {name:'Lebanon'},
    {name:'Lesotho'},
    {name:'Liberia'},
    {name:'Libya'},
    {name:'Liechtenstein'},
    {name:'Lithuania'},
    {name:'Luxembourg'},
    {name:'Madagascar'},
    {name:'Malawi'},
    {name:'Malaysia'},
    {name:'Maldives'},
    {name:'Mali'},
    {name:'Malta'},
    {name:'Mauritania'},
    {name:'Mauritius'},
    {name:'Mexico'},
    {name:'Moldova'},
    {name:'Monaco'},
    {name:'Mongolia'},
    {name:'Montenegro'},
    {name:'Morocco'},
    {name:'Mozambique'},
    {name:'Myanmar'},
    {name:'Namibia'},
    {name:'Nepal'},
    {name:'Netherlands'},
    {name:'Nicaragua'},
    {name:'Niger'},
    {name:'Nigeria'},
    {name:'Norway'},
    {name:'Oman'},
    {name:'Pakistan'},
    {name:'Panama'},
    {name:'Paraguay'},
    {name:'Peru'},
    {name:'Philippines'},
    {name:'Poland'},
    {name:'Portugal'},
    {name:'Qatar'},
    {name:'Romania'},
    {name:'Rwanda'},
    {name:'Saint Lucia'},
    {name:'Samoa'},
    {name:'Sao Tome and Principe'},
    {name:'Saudi Arabia'},
    {name:'Senegal'},
    {name:'Serbia'},
    {name:'Seychelles'},
    {name:'Singapore'},
    {name:'Slovakia'},
    {name:'Slovenia'},
    {name:'Somalia'},
    {name:'South Sudan'},
    {name:'Spain'},
    {name:'Sudan'},
    {name:'Suriname'},
    {name:'Swaziland'},
    {name:'Sweden'},
    {name:'Switzerland'},
    {name:'Tajikistan'},
    {name:'Thailand'},
    {name:'Togo'},
    {name:'Tunisia'},
    {name:'Turkey'},
    {name:'Uganda'},
    {name:'Ukraine'},
    {name:'United Kingdom'},
    {name:'Uruguay'},
    {name:'Uzbekistan'},
    {name:'Vanuatu'},
    {name:'Yemen'},
    {name:'Zambia'},
    {name:'Zimbabwe'}
   ]
  
 nameSearch:string ;
 countries;
 activeCase = 0
 deaths = 0
 date:any
 recovered = 0
 confirmed = 0
 totalConfirm:Number;
 totalDeaths:Number;
 totalRecover:Number;
 searchResult ;
 


 

 
 constructor(private _du:DesignUtilityService, private router:Router) {}


  
  ngOnInit(): void {
    
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

   getWorldData(){
    this._du.getTotal().subscribe(data => {
      // console.log(data);
      this.totalConfirm  = data.TotalConfirmed;
      this.totalDeaths = data.TotalDeaths;
      this.totalRecover = data.TotalRecovered;
    })
  }

}