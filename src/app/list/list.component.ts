
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
