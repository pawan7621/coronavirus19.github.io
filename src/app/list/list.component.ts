
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesignUtilityService } from '../service/design-utility.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
country;
   
activeCase = 0
deaths = 0
date:any
recovered = 0
confirmed = 0
nameSearch:string = ''
countryInfo = [
  {
    countryName:'india',
    countryCode:101,
    countryData:895555
  },
  {
    countryName:'irak',
    countryCode:102,
    countryData:89695
  },
  {
    countryName:'australia',
    countryCode:103,
    countryData:89691
  },
  {
    countryName:'Itli',
    countryCode:104,
    countryData:89692
  },
  {
    countryName:'brazil',
    countryCode:105,
    countryData:89693
  },
  {
    countryName:'Rush',
    countryCode:106,
    countryData:89697
  },
  {
    countryName:'america',
    countryCode:107,
    countryData:89698
  }
]
  constructor(private route:ActivatedRoute, private _du:DesignUtilityService) { 
   this.route.queryParams.subscribe(data => {
     console.log(data);
     this.country = data.data;
     this.fetchData();
   })
  }
  
  ngOnInit(): void {
     
  }

 fetchData() {
  //  console.log('List Component');
  this._du.getCoronaRealData(this.country).subscribe(res => {
    console.log(res);
    var index = res.length - 1;
    this.activeCase =  res[index].Active;
    this.deaths =  res[index].Deaths;
    this.date =  res[index].Date;
    this.confirmed =  res[index].Active;
    this.recovered =  res[index].Recovered;

    console.log(this.activeCase)
    console.log(this.date)
    console.log(this.deaths)
    console.log(this.confirmed)
    console.log(this.recovered)
    
  })
 }

}
