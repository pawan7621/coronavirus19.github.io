import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Search } from '../interface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(private http:HttpClient) { }
 
   getCountry():Observable<any>{
    const url = 'https://api.covid19api.com/summary/Countries' 
    return this.http.get<any>(url);
  }
  
   
  getCoronaCountry(searchValue):Observable<Search>{
    const url = 'https://api.covid19api.com/total/country/' + searchValue
    return this.http.get<Search>(url);
  }
  getCoronaRealData(country):Observable<any>{
    const url= "https://api.covid19api.com/total/dayone/country/" + country
    return this.http.get<any>(url);
  }
  getTotal():Observable<any>{
    const url = 'https://api.covid19api.com/world/total' 
    return this.http.get<any>(url)
  }
}
